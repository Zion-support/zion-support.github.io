import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Wallet, Database, Save } from 'lucide-react';

export default function AccountSettings() {
  return (
    <>
      <SEO title='Account Settings' description='Manage your account' />
      <Header />
      <main className='container mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold mb-6 text-white'>Account Settings</h1>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}