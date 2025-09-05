import type { NextPage } from 'next',
import Link from 'next/link',
import Seo from '../../components/seo/Seo',
const ProductManagementChat: NextPage = () => {
  return (
    <div>
      <Seo title=&quot;Product Management&quot; description=&quot;Product management strategy and insights by Zion.&quot; openGraph={{ title: 'Product Management', description: 'Product management strategy and insights by Zion.' }} />
      <main>
        <h1>ProductManagementChat</h1>
        <p>Blog content coming soon...</p>
        <a href=&quot;/blog&quot;>Back to Blog</a>
      </main>
    </div>
  )
},

export default ProductManagementChat,