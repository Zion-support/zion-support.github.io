import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';

interface ModelConfig {
  id: string,
  version: number,
  purpose: string,
  baseModel: string,
  active: boolean,
  createdAt: string}

interface ModelVersionData extends ModelConfig {
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',
  errorMessage?: string;
}

export function ModelManager() {
  const [models, setModels] = useState<ModelVersionData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeJobs, setActiveJobs] = useState<Record<string, boolean>>({});

  const fetchModels = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockModels: ModelVersionData[] = [
        {
          id: 'zion-gpt-chat-v1',
          version: 1,
          purpose: 'General Chat',
          baseModel: 'gpt-3.5-turbo',
          active: true,
          createdAt: '2024-01-15T10:00:00Z',
          trainingStatus: 'succeeded'
        },
        {
          id: 'zion-gpt-support-v1',
          version: 1,
          purpose: 'Customer Support',
          baseModel: 'gpt-4',
          active: false,
          createdAt: '2024-01-20T14:30:00Z',
          trainingStatus: 'succeeded'
        },
        {
          id: 'zion-gpt-content-v1',
          version: 1,
          purpose: 'Content Generation',
          baseModel: 'gpt-3.5-turbo',
          active: false,
          createdAt: '2024-01-25T09:15:00Z',
          trainingStatus: 'running'
        },
        {
          id: 'zion-gpt-analysis-v1',
          version: 1,
          purpose: 'Data Analysis',
          baseModel: 'gpt-4',
          active: false,
          createdAt: '2024-01-30T16:45:00Z',
          trainingStatus: 'failed',
          errorMessage: 'Training data insufficient'
        }
      ],
      setModels(mockModels);
    } catch (error) {
      logErrorToProduction('Failed to fetch models:', { error });
    } finally {
      setIsLoading(false);
    }
  };

  const checkTrainingStatus = async (modelId: string) => {
    setActiveJobs(prev => ({ ...prev, [modelId]: true }));
    try {
      // Simulate status check
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setModels(prev => prev.map(model => 
        model.id === modelId 
          ? { ...model, trainingStatus: 'succeeded' as const }
          : model
      ))} catch (error) {
      logErrorToProduction('Failed to check training status:', { error, modelId });
    } finally {
      setActiveJobs(prev => ({ ...prev, [modelId]: false }));
    }
  };

  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setModels(prev => prev.map(model => 
        model.id === modelId 
          ? { ...model, active: !currentActive }
          : model
      ))} catch (error) {
      logErrorToProduction('Failed to toggle model status:', { error, modelId });
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>ZionGPT Models</CardTitle>
          <CardDescription>
            Manage fine-tuned AI models for different platform features
          </CardDescription>
        </div>
        <Button onClick={fetchModels}  size="sm">
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center h-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model ID</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Base Model</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {models.map((model) => (
                <TableRow key={model.id}>
                  <TableCell className="font-medium">{model.id}</TableCell>
                  <TableCell>v{model.version}</TableCell>
                  <TableCell>{model.purpose}</TableCell>
                  <TableCell>{model.baseModel}</TableCell>
                  <TableCell>
                    {model.trainingStatus === 'succeeded' ? (
                      <Badge className="bg-green-500">Ready</Badge>
                    ) : model.trainingStatus === 'failed' ? (
                      <Badge className="bg-red-500">Failed</Badge>
                    ) : model.trainingStatus === 'running' ? (
                      <Badge className="bg-blue-500">Training</Badge>
                    ) : (
                      <Badge className="bg-yellow-500">Queued</Badge>
                    )}
                    {model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>
                  <TableCell>{new Date(model.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    {model.trainingStatus === 'queued' || model.trainingStatus === 'running' ? (
                      <Button
                        
                        size="sm"
                        onClick={() => checkTrainingStatus(model.id)}
                        disabled={activeJobs[model.id]}
                      >
                        {activeJobs[model.id] ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <RefreshCw className="h-4 w-4" />
                        )}
                        <span className="ml-1">Check</span>
                      </Button>
                    ) : model.trainingStatus === 'succeeded' ? (
                      <Button
                        
                        size="sm"
                        onClick={() => toggleModelActive(model.id, model.active, model.purpose)}
                      >
                        {model.active ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" /> Active
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-1" /> Activate
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        
                        size="sm"
                        className="text-red-500"
                        title={model.errorMessage || "Training failed"}
                      >
                        <AlertCircle className="h-4 w-4 mr-1" /> Error
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}