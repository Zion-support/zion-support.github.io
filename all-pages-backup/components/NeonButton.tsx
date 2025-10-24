<<<<<<< HEAD
import React from &quot;react&quot
import { ArrowRight } from &quot;lucide-react&quot
interface NeonButtonProps {
  children?: React.ReactNode
  className?: string
  title?: string
  description?: string
  href?: string
  onClick?: () => void
  variant?: &quot;primary&quot; | &quot;secondary&quot; | &quot;accent&quot
  size?: &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot
  icon?: React.ReactNode
  disabled?: boolean
}

<<<<<<< HEAD:all-pages-backup/components/NeonButton.tsx
const NeonButton: React.FC<NeonButtonProps> = ({;
  children
  href
  onClick,
:app/components/NeonButton.tsx
  variant=&quot;primary&quot;
  size=&quot;md&quot;
  className=&quot;&quot;
  icon
  disabled = false
}) => {
  const baseClasses =;
<<<<<<< HEAD:all-pages-backup/components/NeonButton.tsx
    &quot;relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100&quot
:app/components/NeonButton.tsx
  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]
=======
import React from 'react';
>>>>>>> origin/main

const NeonButtonPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <>
<<<<<<< HEAD:all-pages-backup/components/NeonButton.tsx
      <Helmet>;
:app/components/NeonButton.tsx
        <title>NeonButton</title>;
        <meta name=&quot;description&quot; content=&quot;Advanced NeonButton solution for modern businesses.&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, NeonButton, AI solutions, intelligent automation&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              NeonButton
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced NeonButton solution for modern businesses.
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NeonButton
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under construction and will be available soon.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700">
              We are working hard to bring you the best experience. Please check back later.
>>>>>>> origin/main
            </p>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <Footer />
    </>
<<<<<<< HEAD:all-pages-backup/components/NeonButton.tsx
  )};

export default NeonButtonPage
  constvariantClasses= {primary:
     &quot;bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl&quot;
    secondary:
     &quot;bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl&quot;
    accent:
      &quot;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl&quot
  }

  const neonEffect =;
    &quot;before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10&quot
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
:app/components/NeonButton.tsx

  constcontent= (;
  <di v>{icon&&<spanclassName=&quot;mr-2&quot;>{icon}</spa>}
      {children}
      {!icon && <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />}
=======
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default NeonButton
:app/components/NeonButton.tsx
=======
export default NeonButtonPage;
>>>>>>> origin/main
