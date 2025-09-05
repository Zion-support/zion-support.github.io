<<<<<<< HEAD
import { useState } from 'react',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { Header } from '@/components/Header',;
import { Footer } from '@/components/Footer',;
import { DropzoneBulkUpload } from '@/components/DropzoneBulkUpload',;
import { ProductSubmissionForm } from '@/components/ProductSubmissionForm',;
import { SEO } from '@/components/SEO',;
;
export default function SellerDashboard() {;
  const [tab, setTab] = useState('products'),;
;
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO title="Seller Dashboard" description="Manage your listings" />;
      <Header />;
      <main className="flex-1 container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold text-white mb-4">Seller Dashboard</h1>;
        <Tabs value={tab} onValueChange={setTab}>;
          <TabsList className="mb-6">;
            <TabsTrigger value="products">Products</TabsTrigger>;
            <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>;
          </TabsList>;
          <TabsContent value="products">;
            <ProductSubmissionForm />;
          </TabsContent>;
          <TabsContent value="bulk">;
            <DropzoneBulkUpload />;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </div>;
  ),;
=======
import { useState } from 'react',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { Header } from '@/components/Header',
import { Footer } from '@/components/Footer',
import { DropzoneBulkUpload } from '@/components/DropzoneBulkUpload',
import { ProductSubmissionForm } from '@/components/ProductSubmissionForm',
import { SEO } from '@/components/SEO',
export default function SellerDashboard() {
  const [tab, setTab] = useState('products'),
  return (
    <div className=&quot;min-h-screen flex flex-col bg-zion-blue&quot;>
      <SEO title=&quot;Seller Dashboard&quot; description=&quot;Manage your listings&quot; />
      <Header />
      <main className=&quot;flex-1 container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>Seller Dashboard</h1>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className=&quot;mb-6&quot;>
            <TabsTrigger value=&quot;products&quot;>Products</TabsTrigger>
            <TabsTrigger value=&quot;bulk&quot;>Bulk Upload</TabsTrigger>          </TabsList>
          <TabsContent value=&quot;products&quot;>
            <ProductSubmissionForm />
          </TabsContent>
          <TabsContent value=&quot;bulk&quot;>
            <DropzoneBulkUpload />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
