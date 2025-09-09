import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { apiClient } from "@/utils/apiClient";
export function useWebhooks() {
    const { user } = useAuth();
    const [webhooks, setWebhooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [testResult, setTestResult] = useState(null);
    // Helper to get the base URL for webhook functions
    const getWebhookUrl = () => {
        // import.meta may be undefined when this hook is executed in a Node
        // environment (e.g. during server side rendering or tests). Using optional
        // chaining avoids a TypeError in those cases and falls back to process.env.
        const env = import.meta?.env ?? process.env;
        const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
        return `${url}/functions/v1/webhook-manager`;
    };
    // Fetch user's webhooks
    const fetchWebhooks = async () => {
        if (!user)
            return;
        setLoading(true);
        setError(null);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                setError("Authentication required");
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/webhooks`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${session.access_token}`,
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Failed to fetch webhooks');
            }
            setWebhooks(result.webhooks || []);
        }
        catch (err) {
            console.error('Error fetching webhooks:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            toast({
                variant: "destructive",
                title: "Error fetching webhooks",
                description: err instanceof Error ? err.message : 'An unknown error occurred',
            });
        }
        finally {
            setLoading(false);
        }
    };
    // Create new webhook
    const createWebhook = async (name, url, eventTypes, secret) => {
        if (!user)
            return;
        setLoading(true);
        setError(null);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                setError("Authentication required");
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/create`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${session.access_token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    url,
                    eventTypes,
                    secret
                })
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Failed to create webhook');
            }
            // Add the new webhook to the list
            setWebhooks(prev => [result.webhook, ...prev]);
            toast({
                title: "Webhook Created",
                description: "Your webhook has been created successfully.",
            });
            return result.webhook;
        }
        catch (err) {
            console.error('Error creating webhook:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            toast({
                variant: "destructive",
                title: "Error creating webhook",
                description: err instanceof Error ? err.message : 'An unknown error occurred',
            });
        }
        finally {
            setLoading(false);
        }
    };
    // Toggle webhook active status
    const toggleWebhook = async (webhookId, isActive) => {
        if (!user)
            return;
        setLoading(true);
        setError(null);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                setError("Authentication required");
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/toggle`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${session.access_token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ webhookId, isActive })
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Failed to update webhook');
            }
            // Update the webhook in the list
            setWebhooks(prev => prev.map(webhook => webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook));
            toast({
                title: isActive ? "Webhook Activated" : "Webhook Deactivated",
                description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`,
            });
            return result;
        }
        catch (err) {
            console.error('Error toggling webhook:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            toast({
                variant: "destructive",
                title: "Error updating webhook",
                description: err instanceof Error ? err.message : 'An unknown error occurred',
            });
        }
        finally {
            setLoading(false);
        }
    };
    // Delete webhook
    const deleteWebhook = async (webhookId) => {
        if (!user)
            return;
        setLoading(true);
        setError(null);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                setError("Authentication required");
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/delete`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${session.access_token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ webhookId })
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Failed to delete webhook');
            }
            // Remove the webhook from the list
            setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId));
            toast({
                title: "Webhook Deleted",
                description: "The webhook has been deleted successfully.",
            });
            return result;
        }
        catch (err) {
            console.error('Error deleting webhook:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            toast({
                variant: "destructive",
                title: "Error deleting webhook",
                description: err instanceof Error ? err.message : 'An unknown error occurred',
            });
        }
        finally {
            setLoading(false);
        }
    };
    // Test webhook
    const testWebhook = async (webhookId, eventType) => {
        if (!user)
            return;
        setLoading(true);
        setError(null);
        setTestResult(null);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                setError("Authentication required");
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/test`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${session.access_token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ webhookId, eventType })
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Failed to test webhook');
            }
            // Store test result
            setTestResult({
                status: result.status,
                statusText: result.statusText,
                responseBody: result.responseBody
            });
            // Update last triggered timestamp
            setWebhooks(prev => prev.map(webhook => webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook));
            toast({
                title: "Webhook Test Sent",
                description: `Test completed with status: ${result.status} ${result.statusText}`,
            });
            return result;
        }
        catch (err) {
            console.error('Error testing webhook:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            toast({
                variant: "destructive",
                title: "Error testing webhook",
                description: err instanceof Error ? err.message : 'An unknown error occurred',
            });
        }
        finally {
            setLoading(false);
        }
    };
    return {
        webhooks,
        loading,
        error,
        testResult,
        fetchWebhooks,
        createWebhook,
        toggleWebhook,
        deleteWebhook,
        testWebhook,
        clearTestResult: () => setTestResult(null)
    };
}
