'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Check } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface HeaderProps {
  
  className?: string
}

const Header: React.FC<HeaderProps> = ({  className = ''  }) => {
  return (
    <>
    <Helmet ></Helmet>
  </>
);
        <title>Header - Zion Tech Group</title>
        <meta name="description" content="Advanced Header solution for modern businesses."   /></meta>
        <meta name="keywords" content="AI, artificial intelligence, Header, AI solutions, intelligent automation"   /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Advanced Header Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your business with our cutting-edge header technology and AI-powered solutions.
            </p>
          </div>
        </div>
      </div>
      <Footer /></Footer>
    < />
  </>
);
  </>
);
};

export default Header;