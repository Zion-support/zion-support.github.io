

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = "Zion Tech Group - AI Solutions"
  description = "Advanced AI solutions for modern businesses"
  keywords = "AI, artificial intelligence, technology solutions, business automation" }
}) => {</SEOHeadProps>
  return (
    <>
      <Helmet />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
        <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              {title.replace(' - Zion Tech Group', '')}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
              
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features
              <p className="text-lg text-gray-300 mb-8">
                Discover the powerful features that make SEOHead the perfect solution for your business.
              </p>
            <div className="grid md:grid-cols-2 l
  g:grid-cols-4 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered
                <p className="text-lg text-gray-300 mb-8">Advanced AI algorithms for intelligent automation.</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Scalable
                <p className="text-lg text-gray-300 mb-8">Grows with your business needs and requirements.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Secure
                <p className="text-lg text-gray-300 mb-8">Enterprise-grade security and data protection.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Efficient
                <p className="text-lg text-gray-300 mb-8">Optimized performance for maximum productivity.
              
      
        
        {/* CTA Section */}</p>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using SEOHead to transform their operations.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Your Free Trial
            
          
        
      
      
    
  );
}  )}
export default SEOHead,
;