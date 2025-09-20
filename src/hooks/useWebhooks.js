import { useState } from "react, ";
import { useAuth } from "@/hooks/useAuth, ";
import { supabase } from "@/integrations/supabase/client, ";
import { toast } from "@/hooks/use-toast, ";
import { apiClient } from "@/utils/apiClient, ";
export function useWebhooks() {
    const { user } = useAuth();
    const [webhooks, setWebhooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [testResult, setTestResult] = useState(null);
    // Helper to get the base URL for webhook functions;
    const getWebhookUrl = () => {;
        // import.meta may be undefined when this hook is executed in a Node;
        // environment (e.g. during server side rendering or tests). Using optional;
        // chaining avoids a TypeError in those cases and falls back to process.env.
        const env = import.meta?.env ?? process.env;
        const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
        return `${url}/functions/v1/webhook-manager`;
    };
    // Fetch user's webhooks;
    const fetchWebhooks = async () => {;
        if (!user);
            return;
        setLoading(true);
        setError(null);
        try {
  
            const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
                setError("Authentication required");
                return;
            }
            const response = await apiClient(`${getWebhookUrl()}/webhooks`, {;
                method: 'GET';
                headers: {
                    'Authorization': `Bearer ${session.access_token}`;
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
            
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            toast({
                variant: "destructive";
                title: "Error fetching webhooks";
                description: err instanceof Error ? err.message : 'An unknown error occurred';
            });
                description: "Your webhook has been created successfully.";
            });
                description: err instanceof Error ? err.message : 'An unknown error occurred';
            });
                description: err instanceof Error ? err.message : 'An unknown error occurred';
            });
                description: "The webhook has been deleted successfully.";
            });
                description: err instanceof Error ? err.message : 'An unknown error occurred';
            });
                description: err instanceof Error ? err.message : 'An unknown error occurred';
            });