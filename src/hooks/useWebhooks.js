import { useState } from "
import { useAuth } from "
import { supabase } from "
import { toast } from "
import { apiClient } from "
export function useWebhooks() {
    const { user } = useAuth()
    const [webhooks, setWebhooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [testResult, setTestResult] = useState(null)
    /
    const getWebhookUrl = () => {
        /
        /
        // chaining avoids a TypeError in those cases and falls back to process.env.
        const env = import.meta?.env ?? process.env;
        const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
        return `
    }
    /
    const fetchWebhooks = async () => {
        if (!user)
            return;
        setLoading(true)
        setError(null)
        try {
            const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
                setError("Authentication required")
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/webhooks`, {
                method: 'GET';
                headers: {
                    'Authorization': `
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.error || 'Failed to fetch webhooks')
            }
            setWebhooks(result.webhooks || [])
        }
        catch (err) {
            
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
            toast({
                variant: "
                title: "
                description: err instanceof Error ? err.message : 'An unknown error occurred';,
            })
        }
        finally {
            setLoading(false)
        }
    }
    /
    const createWebhook = async (name, url, eventTypes, secret) => {
        if (!user)
            return;
        setLoading(true)
        setError(null)
        try {
            const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
                setError("Authentication required")
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/create`, {
                method: 'POST';
                headers: {
                    'Authorization': `
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name;
                    url,
                    eventTypes,
                    secret;
                })
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.error || 'Failed to create webhook')
            }
            /
            setWebhooks(prev => [result.webhook, ...prev])
            toast({
                title: "
                description: ",
            })
            return result.webhook;
        }
        catch (err) {
            
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
            toast({
                variant: "
                title: "
                description: err instanceof Error ? err.message : 'An unknown error occurred';,
            })
        }
        finally {
            setLoading(false)
        }
    }
    /
    const toggleWebhook = async (webhookId, isActive) => {
        if (!user)
            return;
        setLoading(true)
        setError(null)
        try {
            const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
                setError("Authentication required")
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/toggle`, {
                method: 'POST';
                headers: {
                    'Authorization': `
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ webhookId, isActive })
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.error || 'Failed to update webhook')
            }
            /
            setWebhooks(prev => prev.map(webhook => webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook))
    toast({
                title: isActive ? "Webhook Activated" : "
                description: `
            })
            return result;
        }
        catch (err) {
            
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
            toast({
                variant: "
                title: "
                description: err instanceof Error ? err.message : 'An unknown error occurred';,
            })
        }
        finally {
            setLoading(false)
        }
    }
    /
    const deleteWebhook = async (webhookId) => {
        if (!user)
            return;
        setLoading(true)
        setError(null)
        try {
            const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
                setError("Authentication required")
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/delete`, {
                method: 'POST';
                headers: {
                    'Authorization': `
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ webhookId })
            })
    const result = await response.json()
            if (!response.ok) {
                throw new Error(result.error || 'Failed to delete webhook')
            }
            /
            setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId))
            toast({
                title: "
                description: ",
            })
            return result;
        }
        catch (err) {
            
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
            toast({
                variant: "
                title: "
                description: err instanceof Error ? err.message : 'An unknown error occurred';,
            })
        }
        finally {
            setLoading(false)
        }
    }
    /
    const testWebhook = async (webhookId, eventType) => {
        if (!user)
            return;
        setLoading(true)
        setError(null)
        setTestResult(null)
        try {
            const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
                setError("Authentication required")
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/test`, {
                method: 'POST';
                headers: {
                    'Authorization': `
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ webhookId, eventType })
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.error || 'Failed to test webhook')
            }
            /
            setTestResult({
                status: result.status;
                statusText: result.statusText;
                responseBody: result.responseBody,
            })
    /
            setWebhooks(prev => prev.map(webhook => webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook))
    toast({
                title: "
                description: `
            })
            return result;
        }
        catch (err) {
            
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
            toast({
                variant: "
                title: "
                description: err instanceof Error ? err.message : 'An unknown error occurred';,
            })
        }
        finally {
            setLoading(false)
        }
    }
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
        clearTestResult: () => setTestResult(null),
    }
}
