import React, { useState } from 'react';
import { BookOpen, Code, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ApiDocumentation: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    authentication: `curl -X POST https://api.ziontechgroup.com/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
  }'`,

    createOrder: `curl -X POST https://api.ziontechgroup.com/orders \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "service_id": "service_123",
    "quantity": 1,
    "notes": "Additional requirements"
  }'`,

    getOrders: `curl -X GET https://api.ziontechgroup.com/orders \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
  };

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold text-gray-900'>API Documentation</h2>
        <p className='text-gray-600'>Complete guide to using our API</p>
      </div>

      <Tabs defaultValue='overview' className='space-y-6'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='authentication'>Authentication</TabsTrigger>
          <TabsTrigger value='endpoints'>Endpoints</TabsTrigger>
          <TabsTrigger value='examples'>Examples</TabsTrigger>
        </TabsList>

        <TabsContent value='overview' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <BookOpen className='h-5 w-5 mr-2' />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p>
                Our API provides programmatic access to all platform features.
                You can create orders, manage your account, and retrieve data
                using simple HTTP requests.
              </p>
              <div className='bg-blue-50 p-4 rounded-lg'>
                <h4 className='font-semibold text-blue-900 mb-2'>Base URL</h4>
                <code className='text-blue-800'>
                  https://api.ziontechgroup.com/v1
                </code>
              </div>
              <div className='bg-green-50 p-4 rounded-lg'>
                <h4 className='font-semibold text-green-900 mb-2'>
                  Rate Limits
                </h4>
                <p className='text-green-800'>
                  Free tier: 100 requests per hour
                  <br />
                  Pro tier: 1,000 requests per hour
                  <br />
                  Enterprise: Custom limits
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='authentication' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                All API requests require authentication using your API key
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p>
                Include your API key in the Authorization header of all
                requests:
              </p>
              <div className='bg-gray-900 text-gray-100 p-4 rounded-lg'>
                <div className='flex items-center justify-between'>
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() =>
                      copyToClipboard(
                        'Authorization: Bearer YOUR_API_KEY',
                        'auth-header'
                      )
                    }
                  >
                    {copiedCode === 'auth-header' ? (
                      <Check className='h-4 w-4 text-green-500' />
                    ) : (
                      <Copy className='h-4 w-4' />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='endpoints' className='space-y-6'>
          <div className='grid gap-4'>
            <Card>
              <CardHeader>
                <CardTitle>POST /auth/token</CardTitle>
                <CardDescription>
                  Authenticate and get access token
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>
                      POST
                    </span>
                    <code>/auth/token</code>
                  </div>
                  <p className='text-sm text-gray-600'>
                    Returns an access token for authenticated requests
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GET /orders</CardTitle>
                <CardDescription>Retrieve your orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>
                      GET
                    </span>
                    <code>/orders</code>
                  </div>
                  <p className='text-sm text-gray-600'>
                    Returns a list of all your orders
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>POST /orders</CardTitle>
                <CardDescription>Create a new order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>
                      POST
                    </span>
                    <code>/orders</code>
                  </div>
                  <p className='text-sm text-gray-600'>
                    Creates a new order for a service
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='examples' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Code className='h-5 w-5 mr-2' />
                Code Examples
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div>
                <h4 className='font-semibold mb-2'>Authentication</h4>
                <div className='bg-gray-900 text-gray-100 p-4 rounded-lg'>
                  <div className='flex items-center justify-between'>
                    <pre className='text-sm overflow-x-auto'>
                      {codeExamples.authentication}
                    </pre>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() =>
                        copyToClipboard(codeExamples.authentication, 'auth')
                      }
                    >
                      {copiedCode === 'auth' ? (
                        <Check className='h-4 w-4 text-green-500' />
                      ) : (
                        <Copy className='h-4 w-4' />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className='font-semibold mb-2'>Create Order</h4>
                <div className='bg-gray-900 text-gray-100 p-4 rounded-lg'>
                  <div className='flex items-center justify-between'>
                    <pre className='text-sm overflow-x-auto'>
                      {codeExamples.createOrder}
                    </pre>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() =>
                        copyToClipboard(
                          codeExamples.createOrder,
                          'create-order'
                        )
                      }
                    >
                      {copiedCode === 'create-order' ? (
                        <Check className='h-4 w-4 text-green-500' />
                      ) : (
                        <Copy className='h-4 w-4' />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className='font-semibold mb-2'>Get Orders</h4>
                <div className='bg-gray-900 text-gray-100 p-4 rounded-lg'>
                  <div className='flex items-center justify-between'>
                    <pre className='text-sm overflow-x-auto'>
                      {codeExamples.getOrders}
                    </pre>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() =>
                        copyToClipboard(codeExamples.getOrders, 'get-orders')
                      }
                    >
                      {copiedCode === 'get-orders' ? (
                        <Check className='h-4 w-4 text-green-500' />
                      ) : (
                        <Copy className='h-4 w-4' />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApiDocumentation;
