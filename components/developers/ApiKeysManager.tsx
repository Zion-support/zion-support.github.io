import React, { useState } from 'react';
import { Key, Plus, Trash2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed?: string;
  permissions: string[];
}

const ApiKeysManager: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: '1',
      name: 'Production API Key',
      key: 'sk-1234567890abcdef',
      createdAt: '2024-01-15',
      lastUsed: '2024-01-20',
      permissions: ['read', 'write']
    }
  ]);
  const [showKey, setShowKey] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateKey = () => {
    setIsCreating(true);
    // Simulate API call
    setTimeout(() => {
      const newKey: ApiKey = {
        id: Date.now().toString(),
        name: 'New API Key',
        key: 'sk-' + Math.random().toString(36).substr(2, 16),
        createdAt: new Date().toISOString().split('T')[0],
        permissions: ['read']
      };
      setApiKeys([...apiKeys, newKey]);
      setIsCreating(false);
    }, 1000);
  };

  const handleDeleteKey = (id: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== id));
  };

  const toggleShowKey = (id: string) => {
    setShowKey(showKey === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">API Keys</h2>
          <p className="text-gray-600">Manage your API keys for accessing our services</p>
        </div>
        <Button onClick={handleCreateKey} disabled={isCreating}>
          <Plus className="h-4 w-4 mr-2" />
          {isCreating ? 'Creating...' : 'Create New Key'}
        </Button>
      </div>

      <div className="grid gap-4">
        {apiKeys.map((apiKey) => (
          <Card key={apiKey.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 mr-2" />
                    {apiKey.name}
                  </CardTitle>
                  <CardDescription>
                    Created on {new Date(apiKey.createdAt).toLocaleDateString()}
                    {apiKey.lastUsed && (
                      <span className="ml-2">
                        • Last used: {new Date(apiKey.lastUsed).toLocaleDateString()}
                      </span>
                    )}
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleShowKey(apiKey.id)}
                  >
                    {showKey === apiKey.id ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteKey(apiKey.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor={`key-${apiKey.id}`}>API Key</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id={`key-${apiKey.id}`}
                      value={showKey === apiKey.id ? apiKey.key : '••••••••••••••••'}
                      readOnly
                      className="font-mono"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(apiKey.key)}
                    >
                      Copy
                    </Button>
                  </div>
                </div>
                <div>
                  <Label>Permissions</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {apiKey.permissions.map((permission) => (
                      <span
                        key={permission}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {permission}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {apiKeys.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <Key className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No API Keys</h3>
            <p className="text-gray-600 mb-4">
              Create your first API key to start using our services.
            </p>
            <Button onClick={handleCreateKey}>
              <Plus className="h-4 w-4 mr-2" />
              Create API Key
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ApiKeysManager;