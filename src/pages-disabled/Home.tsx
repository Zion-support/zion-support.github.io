import React from 'react',
import Link from 'next/link',
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-zion-cyan text-center mb-8">
          Leading AI and technology solutions
        </p>
        <div className="text-center">
          <Link href="/services" >
              <span className="bg-zion-cyan text-zion-blue px-6 py-3 rounded-lg hover:bg-zion-cyan/80 transition-colors">
                Explore Services
              </span>
            </Link>
        </div>
      </div>
    </div>
  );;

export default Home;