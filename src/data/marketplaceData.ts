export interface MarketplaceItem { id: string; title: string; category:
  'products' |'talent' |
  'equipment' |
  'services'; description: string; price: number; rating: number; reviews: number; views: number; likes: number; image: string; tags: string[]; featured: boolean; seller: { name: string; rating: number; verified: boolean; }; location: string; availability: 'available' |
  'limited' |
  'out-of-stock'; deliveryTime: string; warranty: string; createdAt: Date; updatedAt: Date; } export const marketplaceItems: MarketplaceItem[] = [ { id:, ai-server-cluster', title: 'AI-Powered Server Cluster, category:,
  products', description: 'High-performance computing cluster optimized for AI workloads with GPU acceleration and scalable architecture., price: 25000, rating: 4.9, reviews: 127, views: 2847, likes: 156, image:,
  https: ''
export interface MarketplaceItem { id: string; title: string; category: 'products' | 'talent' | 'equipment' | 'services'; description: string; price: number; rating: number; reviews: number; views: number; likes: number; image: string; tags: string[]; featured: boolean; seller: { name: string; rating: number; verified: boolean; }; location: string; availability: 'available' | 'limited' | 'out-of-stock'; deliveryTime: string; warranty: string; createdAt: Date; updatedAt: Date; } export const marketplaceItems: MarketplaceItem[] = [ { id: 'ai-server-cluster', title: 'AI-Powered Server Cluster', category: 'products', description: 'High-performance computing cluster optimized for AI workloads with GPU acceleration and scalable architecture.', price: 25000, rating: 4.9, reviews: 127, views: 2847, likes: 156, image: 'https:''';
