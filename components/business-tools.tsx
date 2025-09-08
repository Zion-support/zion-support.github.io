












  const businessInsights = [
    {
      title: 'Remote Work Tools'
      description:
        'Essential tools for distributed teams and hybrid work environments.'
      trend: '📈 Growing Demand'
      color: 'text-green-400',      trend: '📈 Growing Demand'
      color: 'text-green-400'
    }
    {
      title: 'AI-Powered Solutions'
      description: 'Business tools leveraging AI for automation and intelligent insights.'
      trend: '🚀 High Growth'
      color: 'text-blue-400'
    }
    {
      title: 'Cloud-Native Platforms'
      description: 'Business applications built for scalability and global accessibility.'
      trend: '☁️ Mainstream'
      color: 'text-cyan-400'
    }
    {
      title: 'AI-Powered Solutions'
      description:
        'Business tools leveraging AI for automation and intelligent insights.'
      trend: '🚀 High Growth'
      color: 'text-blue-400'
    }
    {
      title: 'Cloud-Native Platforms'
      description:
        'Business applications built for scalability and global accessibility.'
      trend: '☁️ Mainstream'
      color: 'text-cyan-400'
    },    {
      title: 'Security & Compliance'
      description: 'Tools ensuring data protection and regulatory compliance.'
      trend: '🔒 Critical'
      color: 'text-orange-400'
    },  ];      color: 'text-cyan-400'
    }
    {
      title: 'Security & Compliance'
      description: 'Tools ensuring data protection and regulatory compliance.'
      trend: '🔒 Critical'
      color: 'text-orange-400'
    },      color: 'text-orange-400'
    }

  ];

  const businessInsights = [
    {
      title: 'Remote Work Tools',
      description: 'Essential tools for distributed teams and hybrid work environments.',
      trend: '📈 Growing Demand',
      color: 'text-green-400'
    };
          description:;

            'Event tracking',
            'Funnel analysis',
            'Cohort analysis',
            'A/B testing',
            'Real-time data',
          ],
          pricing: 'Free - $25/month',
  website: 'https://mixpanel.com',
          icon: <TrendingUp className='w-6 h-6'    />,}
          color: 'bg-gradient-to-br from-purple-500 to-pink-600',}
        },
      ],
    },

      title: 'Remote Work Tools',
  description:
        'Essential tools for distributed teams and hybrid work environments.',
      trend: '📈 Growing Demand',}
  color: 'text-green-400',}
    },
    {
      title: 'AI-Powered Solutions',
  description:
        'Business tools leveraging AI for automation and intelligent insights.',
      trend: '🚀 High Growth',}
  color: 'text-blue-400',}
    },
    {
      title: 'Cloud-Native Platforms',
  description:
        'Business applications built for scalability and global accessibility.',
      trend: '☁️ Mainstream',}
  color: 'text-cyan-400',}
    },
    {

      title: 'Security & Compliance',
  description: 'Tools ensuring data protection and regulatory compliance.',
      trend: '🔒 Critical',}
  color: 'text-orange-400',}
    },

  ];



  ];


  const productivityTips = [;
    {;
      title: 'Start with Free Tiers',;
      description:;
        'Most tools offer free versions to test before committing to paid plans.',;
      icon: <CheckCircle className='w-6 h-6 text-green-400' />,;
    },;
      title: 'Focus on Integration',;
      description:;
        'Choose tools that work well together to avoid data silos and manual work.',;
      icon: <Cog className='w-6 h-6 text-blue-400' />,;
    },;
    {;
      title: 'Measure ROI',;
      description:;
        "Track how each tool improves your team's productivity and business outcomes.",;
      icon: <ChartBar className='w-6 h-6 text-purple-400' />,;
    },;
    {;
      title: 'Train Your Team',;
      description:;
        'Invest in proper training to maximize the value of your chosen tools.',;
      icon: <Users className='w-6 h-6 text-orange-400' />,;
    },  ];              title: 'Train Your Team',;
        description: 'Invest in proper training to maximize the value of your chosen tools.',;
        icon: <Users className="w-6 h-6 text-orange-400" />;
    }

  return (
    <>


      <section className='section - padding bg - gradient - cursor'>;
        <div className='container - cursor'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - responsive - lg font - bold mb - 8 gradient - text text - shadow'>;
              Essential Business Tools;
            </h2>;
            <p className='text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              Hand - picked business tools that deliver real value for your;
              organization. Each tool has been evaluated for features, pricing,
              and business impact.            </p>;
          </div>;
          {business_tools.map ((category, category_index) => (      <section className="section - padding bg - gradient - cursor">;
        <div className="container - cursor">;
          <div className="text - center mb - 20">;
            <h2 className="text - responsive - lg font - bold mb - 8 gradient - text text - shadow">;
              Essential Business Tools;
            </h2>;
            <p className="text - responsive - md text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              Hand - picked business tools that deliver real value for your organization. Each tool has been evaluated;
              for features, pricing, and business impact.;
          </div>;
          {business_tools.map ((category, category_index) => (
            <div key={category_index} className='mb - 20'>;
              <div className='text - center mb - 12'>;
                <h3 className='text - 3xl font - bold text - white mb - 4'>;
                  {category.category}
                </h3>;
                <div className='w - 24 h - 1 bg - gradient - to - r from - cursor - blue to - purple - 500 mx - auto rounded - full' />;
              </div>;
              <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8'>                {category.tools.map ((tool, tool_index) => (
                  <Card;
                    key={tool_index}
                    className={`card - hover border - gradient - blue group ${tool.popular ? 'ring - 2 ring - cursor - blue / 50' : ''}`}            <div key={category_index} className="mb - 20">;
              <div className="text - center mb - 12">;
                <h3 className="text - 3xl font - bold text - white mb - 4">{category.category}</h3>;
                <div className="w - 24 h - 1 bg - gradient - to - r from - cursor - blue to - purple - 500 mx - auto rounded - full" />;
              </div>;
              <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
                  <Card;
                    key={tool_index}
                    className={`card - hover border - gradient - blue group ${tool.popular ? 'ring - 2 ring - cursor - blue / 50' : ''}`}
                    style={{
                      animation_delay: `${category_index * 0.2 + tool_index * 0.1}s`,

<div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {tool.icon}



                    <Button














      <section className='section-padding bg-gradient-to-r from-cursor-blue to-purple-600 relative overflow-hidden'    />;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10'    />;
        <div className='container-cursor text-center relative z-10'    />;
          <h2 className='text-responsive-lg font-bold text-white mb-8'    />;
          </h2>;
          <p className='text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'    />;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6'    />;
            {productivity_tips.map ((tip, index) => (<Card;}
                key={index}
                className='card - hover border - gradient - blue text - center';
                style={{ animation_delay: `${index * 0.1}s` ,
                <h3 className=\"text - xl font - bold text - white mb - 3\"    />{tip.title}</h3>;
                <p className=\"text - gray - 400 text - sm leading - relaxed\"    />{tip.description}</p>))}


      <section className='section - padding bg - gradient - to - r from - cursor - blue to - purple - 600 relative overflow - hidden'    />;
        <div className='absolute inset - 0 bg-[radial - gradient (circle, rgba (255, 255, 255, 0.1)_1px, transparent_1px)] bg-[size:20px_20px] opacity - 10'    />;
        <div className='container - cursor text - center relative z - 10'    />;
          <h2 className='text - responsive - lg font - bold text - white mb - 8'    />;
          </h2>;
          <p className='text - xl text - blue - 100 mb - 12 max - w-4xl mx - auto leading - relaxed'    />;












