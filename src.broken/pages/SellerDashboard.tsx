<<<<<<< HEAD
import { useState } from 'react',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { Header } from '@/components/Header',
import { Footer } from '@/components/Footer',
import { DropzoneBulkUpload } from '@/components/DropzoneBulkUpload',
import { ProductSubmissionForm } from '@/components/ProductSubmissionForm',
import { SEO } from '@/components/SEO',
export default function SellerDashboard() {
  const [tab, setTab] = useState('products'),
=======

export default function SellerDashboard() {_const [tab, _setTab] = useState('products');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;min-h-screen flex flex-col bg-zion-blue&quot;>
      <SEO title=&quot;Seller Dashboard&quot; description=&quot;Manage your listings&quot; />
      <Header />
<<<<<<< HEAD
      <main className=&quot;flex-1 container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>Seller Dashboard</h1>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className=&quot;mb-6&quot;>
            <TabsTrigger value=&quot;products&quot;>Products</TabsTrigger>
            <TabsTrigger value=&quot;bulk&quot;>Bulk Upload</TabsTrigger>
=======
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-4">Seller Dashboard</h1>
        <Tabs value={tab} onValueChange={_setTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </TabsList>
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
}
