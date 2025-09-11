import React from 'react';

import Head from 'next / head';
import Link from 'next / link';
;

<<<<<<< HEAD
<<<<<<< HEAD


import Head from 'next / head';
import Link from 'next / link';
;
import Head from 'next/head';
import Link from 'next/link';

const BlueprintsIndexPage: React.FC = () => {
  const blueprint_categories = [;
    {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const BlueprintsIndexPage: React.FC = () => {
  const blueprint_categories = [;
    {
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      category: 'System Architecture',
      blueprints: [;
=======
      category: 'System Architecture'
      blueprints: [
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {
          id: 'comprehensive - redundancy',
          name: 'Comprehensive Redundancy System',
          description: 'Multi - layer redundancy architecture for maximum uptime',
          status: 'active',
          complexity: 'high',
          last_updated: '2025 - 01 - 17';
        },
        {
<<<<<<< HEAD
          id: 'ultimate - redundancy',
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      category: 'System Architecture',
      blueprints: [

<<<<<<< HEAD
          id: 'comprehensive-redundancy',
          name: 'Comprehensive Redundancy System',
          description: 'Multi-layer redundancy architecture for maximum uptime',
          status: 'active',
          complexity: 'high',
          lastUpdated: '2025-01-17'
        },


          id: 'ultimate-redundancy',

          name: 'Ultimate Redundancy System',
          description: 'Advanced redundancy with automated failover',
          status: 'active',
          complexity: 'critical',

          id: 'github-actions-automation',
          name: 'GitHub Actions Automation',
          description: 'Complete CI/CD automation with self-healing',
          status: 'active',
          complexity: 'high',
          lastUpdated: '2025-01-15'


      ]
    },
    {
      category: 'Deployment Patterns',
      blueprints: [


          id: 'zero-downtime-deployment',
          name: 'Zero-Downtime Deployment',
          description: 'Blue-green deployment with health checks',
          status: 'active',
          complexity: 'medium',
          lastUpdated: '2025-01-14'
        },


          id: 'canary-deployment',

          last_updated: '2025 - 01 - 16';
        },
        {
          id: 'github - actions - automation',
          name: 'GitHub Actions Automation',
          description: 'Complete CI / CD automation with self - healing',
          status: 'active',
          complexity: 'high',
          last_updated: '2025 - 01 - 15';
        }
      ];
    },
    {
      category: 'Deployment Patterns',
      blueprints: [;
        {
          id: 'zero - downtime - deployment',
          name: 'Zero - Downtime Deployment',
          description: 'Blue - green deployment with health checks',
          status: 'active',
          complexity: 'medium',
          last_updated: '2025 - 01 - 14';
        },
        {
          id: 'canary - deployment',
          name: 'Canary Deployment',
          description: 'Gradual rollout with traffic splitting',
          status: 'active',
          complexity: 'high',

          id: 'rolling-update',

          last_updated: '2025 - 01 - 13';
        },
        {
          id: 'rolling - update',
          name: 'Rolling Update Strategy',
          description: 'Sequential instance updates with health monitoring',
          status: 'active',
          complexity: 'medium',

      ]
    },
    {
      category: 'Monitoring & Observability',
      blueprints: [


          id: 'health-check-system',

          last_updated: '2025 - 01 - 12';
        }
      ];
    },
    {
      category: 'Monitoring & Observability',
      blueprints: [;
        {
          id: 'health - check - system',
          name: 'Health Check System',
          description: 'Comprehensive health monitoring and alerting',
          status: 'active',
          complexity: 'medium',

          id: 'performance-monitoring',
          name: 'Performance Monitoring',
          description: 'Real-time performance metrics and alerting',
          status: 'active',
          complexity: 'medium',
          lastUpdated: '2025-01-10'
        },


          id: 'logging-aggregation',

          last_updated: '2025 - 01 - 11';
        },
        {
          id: 'performance - monitoring',
          name: 'Performance Monitoring',
          description: 'Real - time performance metrics and alerting',
          status: 'active',
          complexity: 'medium',
          last_updated: '2025 - 01 - 10';
        },
        {
          id: 'logging - aggregation',
          name: 'Logging Aggregation',
          description: 'Centralized logging with search and analytics',
          status: 'active',
          complexity: 'low',

;
  const recent_blueprints = [;
          lastUpdated: '2025-01-09'


  const recentBlueprints = [

          last_updated: '2025 - 01 - 09';
        }
      ];
    }
  ];
;
  const recent_blueprints = [;
    {
      id: 'blueprint - 2025 - 01 - 17 - 130835',
      name: 'AI Content Factory Blueprint',
      description: 'Automated content generation system architecture',
      date: '2025 - 01 - 17',
      status: 'deployed';
    },
    {
      id: 'blueprint - 2025 - 01 - 17 - 130857',
      name: 'Edge Computing Network Blueprint',
      description: 'Distributed computing architecture for global performance',
      date: '2025 - 01 - 17',
      status: 'development';
    },
    {
      id: 'blueprint - 2025 - 01 - 17 - 130921',
      name: 'Quantum Integration Blueprint',
      description: 'Quantum computing integration framework',
      date: '2025 - 01 - 17',
      status: 'research';
    }
  ];
;
  const getStatusColor = (status: string) =>: any {
    switch (status) {
      case 'active': return 'text - green - 400';
      case 'deployed': return 'text - blue - 400';
      case 'development': return 'text - yellow - 400';
      case 'research': return 'text - purple - 400';
      default: return 'text - gray - 400';
    }
  }
;
  const getComplexityColor = (complexity: string) =>: any {
    switch (complexity) {
      case 'critical': return 'bg - red - 500 / 20 text - red - 400';
      case 'high': return 'bg - orange - 500 / 20 text - orange - 400';
      case 'medium': return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'low': return 'bg - green - 500 / 20 text - green - 400';
      default: return 'bg - gray - 500 / 20 text - gray - 400';
    }
  }
;
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 900 via - indigo - 900 to - gray - 900 text - white">;
      <Head>;
        <title > System Blueprints - bolt.new.zion.app</title>;
        <meta name="description" content="System architecture blueprints and deployment patterns" />;
        <meta name="viewport" content="width = device - width, initial - scale = 1" />;
      </Head>;
      <div className="container mx - auto px - 4 py - 8">;
        {/* Header */}
        <div className="mb - 8">;
          <Link href="/reports" className="text - cyan - 400 hover:text - cyan - 300 transition - colors">;
            ← Back to Reports;
          </Link>;
          <h1 className="text - 4xl font - bold mt - 4 mb - 2 bg - gradient - to - r from - indigo - 400 to - blue - 400 bg - clip - text text - transparent">;
            System Blueprints;
          </h1>;
          <p className="text - gray - 300 text - lg">;
            Architectural patterns and deployment strategies for scalable systems;
          </p>;
        </div>;
        {/* Blueprint Overview */}
        <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6 mb - 8">;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">Total Blueprints</h3>;
            <div className="text - 4xl font - bold text - blue - 400">27</div>;
            <p className="text - gray - 300 text - sm mt - 2">Available patterns</p>;
          </div>;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">Active</h3>;
            <div className="text - 2xl font - bold text - green - 400">18</div>;
            <p className="text - gray - 300 text - sm mt - 2">Currently deployed</p>;
          </div>;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">In Development</h3>;
            <div className="text - 2xl font - bold text - yellow - 400">6</div>;
            <p className="text - gray - 300 text - sm mt - 2">Under construction</p>;
          </div>;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">Research</h3>;
            <div className="text - 2xl font - bold text - purple - 400">3</div>;
            <p className="text - gray - 300 text - sm mt - 2">Conceptual phase</p>;
          </div>;
        </div>;
        {/* Blueprint Categories */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Blueprint Categories</h2>;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
            {blueprint_categories.map ((category, category_index) => (
              <div key={category_index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">{category.category}</h3>;
                <div className="space - y-4">;
                  {category.blueprints.map ((blueprint, blueprint_index) => (
                    <div key={blueprint_index} className="border - l-2 border - indigo - 400 / 30 pl - 4">;
                      <div className="flex justify - between items - start mb - 2">;
                        <Link;
                          href={`/reports / blueprints/${blueprint.id}`}
                          className="text - white font - medium hover:text - indigo - 300 transition - colors";
                        >;
      category: 'System Architecture'
      blueprints: [
        {
          id: 'comprehensive-redundancy'
          name: 'Comprehensive Redundancy System'
          description: 'Multi-layer redundancy architecture for maximum uptime'
          status: 'active'
          complexity: 'high'
          lastUpdated: '2025-01-17'
        }
        {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          id: 'ultimate-redundancy'
          name: 'Ultimate Redundancy System'
          description: 'Advanced redundancy with automated failover'
          status: 'active'
          complexity: 'critical'
          lastUpdated: '2025-01-16'
        }
        {
          id: 'github-actions-automation'
          name: 'GitHub Actions Automation'
          description: 'Complete CI/CD automation with self-healing'
          status: 'active'
          complexity: 'high'
          lastUpdated: '2025-01-15'
        }
      ]
    }
    {
      category: 'Deployment Patterns'
      blueprints: [
        {
          id: 'zero-downtime-deployment'
          name: 'Zero-Downtime Deployment'
          description: 'Blue-green deployment with health checks'
          status: 'active'
          complexity: 'medium'
          lastUpdated: '2025-01-14'
        }
        {
          id: 'canary-deployment'
          name: 'Canary Deployment'
          description: 'Gradual rollout with traffic splitting'
          status: 'active'
          complexity: 'high'
          lastUpdated: '2025-01-13'
        }
        {
          id: 'rolling-update'
          name: 'Rolling Update Strategy'
          description: 'Sequential instance updates with health monitoring'
          status: 'active'
          complexity: 'medium'
          lastUpdated: '2025-01-12'
        }
      ]
    }
    {
      category: 'Monitoring & Observability'
      blueprints: [
        {
          id: 'health-check-system'
          name: 'Health Check System'
          description: 'Comprehensive health monitoring and alerting'
          status: 'active'
          complexity: 'medium'
          lastUpdated: '2025-01-11'
        }
        {
          id: 'performance-monitoring'
          name: 'Performance Monitoring'
          description: 'Real-time performance metrics and alerting'
          status: 'active'
          complexity: 'medium'
          lastUpdated: '2025-01-10'
        }
        {
          id: 'logging-aggregation'
          name: 'Logging Aggregation'
          description: 'Centralized logging with search and analytics'
          status: 'active'
          complexity: 'low'
          lastUpdated: '2025-01-09'
        }
      ]
    }
  ];
  const recentBlueprints = [
    {
      id: 'blueprint-2025-01-17-130835'
      name: 'AI Content Factory Blueprint'
      description: 'Automated content generation system architecture'
      date: '2025-01-17'
      status: 'deployed'
    }
    {
      id: 'blueprint-2025-01-17-130857'
      name: 'Edge Computing Network Blueprint'
      description: 'Distributed computing architecture for global performance'
      date: '2025-01-17'
      status: 'development'
    }
    {
      id: 'blueprint-2025-01-17-130921'
      name: 'Quantum Integration Blueprint'
      description: 'Quantum computing integration framework'
      date: '2025-01-17'
      status: 'research'
    }
      category: 'System Architecture',
      blueprints: [
<<<<<<< HEAD
        {
        { 
        {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          id: 'comprehensive-redundancy',
          name: 'Comprehensive Redundancy System',
          description: 'Multi-layer redundancy architecture for maximum uptime',
          status: 'active',
          complexity: 'high',
          lastUpdated: '2025-01-17'
        },
<<<<<<< HEAD
<<<<<<< HEAD
        {
        { 
        {
          id: 'ultimate-redundancy',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          id: 'ultimate-redundancy',

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          name: 'Ultimate Redundancy System',
          description: 'Advanced redundancy with automated failover',
          status: 'active',
          complexity: 'critical',
<<<<<<< HEAD
<<<<<<< HEAD
          lastUpdated: '2025-01-16'
        },
        {
        { 
        {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          lastUpdated: '2025-01-16'
        },


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          id: 'github-actions-automation',
          name: 'GitHub Actions Automation',
          description: 'Complete CI/CD automation with self-healing',
          status: 'active',
          complexity: 'high',
          lastUpdated: '2025-01-15'
<<<<<<< HEAD
<<<<<<< HEAD
        }
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ]
    },
    {
      category: 'Deployment Patterns',
      blueprints: [
<<<<<<< HEAD
        {
        { 
        {
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          id: 'zero-downtime-deployment',
          name: 'Zero-Downtime Deployment',
          description: 'Blue-green deployment with health checks',
          status: 'active',
          complexity: 'medium',
          lastUpdated: '2025-01-14'
        },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          id: 'canary-deployment',

          name: 'Canary Deployment',
          description: 'Gradual rollout with traffic splitting',
          status: 'active',
          complexity: 'high',

          lastUpdated: '2025-01-13'
        },


          id: 'rolling-update',

          name: 'Rolling Update Strategy',
          description: 'Sequential instance updates with health monitoring',
          status: 'active',
          complexity: 'medium',

          lastUpdated: '2025-01-12'


      ]
    },
    {
      category: 'Monitoring & Observability',
      blueprints: [


          id: 'health-check-system',

          name: 'Health Check System',
          description: 'Comprehensive health monitoring and alerting',
          status: 'active',
          complexity: 'medium',

          lastUpdated: '2025-01-11'
        },


          id: 'performance-monitoring',
          name: 'Performance Monitoring',
          description: 'Real-time performance metrics and alerting',
          status: 'active',
          complexity: 'medium',
          lastUpdated: '2025-01-10'
        },


          id: 'logging-aggregation',

          name: 'Logging Aggregation',
          description: 'Centralized logging with search and analytics',
          status: 'active',
          complexity: 'low',

;
  const recent_blueprints = [;
=======
          lastUpdated: '2025-01-09'


  const recentBlueprints = [

    {
<<<<<<< HEAD
      category: 'Deployment Patterns',
      blueprints: [
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {
        { 
        {
          id: 'canary-deployment',
          name: 'Canary Deployment',
          description: 'Gradual rollout with traffic splitting',
          status: 'active',
          complexity: 'high',
          lastUpdated: '2025-01-13'
        },
        {
        { 
        {
          id: 'rolling-update',
          name: 'Rolling Update Strategy',
          description: 'Sequential instance updates with health monitoring',
          status: 'active',
          complexity: 'medium',
          lastUpdated: '2025-01-12'
        }
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      ]
    },
    {
      category: 'Monitoring & Observability',
      blueprints: [
        {
        { 
        {
          id: 'health-check-system',
          name: 'Health Check System',
          description: 'Comprehensive health monitoring and alerting',
          status: 'active',
          complexity: 'medium',
          lastUpdated: '2025-01-11'
        },
        {
        { 
        {
          id: 'performance-monitoring',
          name: 'Performance Monitoring',
          description: 'Real-time performance metrics and alerting',
          status: 'active',
          complexity: 'medium',
          lastUpdated: '2025-01-10'
        },
        {
        { 
        {
          id: 'logging-aggregation',
          name: 'Logging Aggregation',
          description: 'Centralized logging with search and analytics',
          status: 'active',
          complexity: 'low',
          lastUpdated: '2025-01-09'
        }
      ]
    }
  ];

          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      ]
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ];
  const recentBlueprints = [
    {
      id: 'blueprint-2025-01-17-130835',
      name: 'AI Content Factory Blueprint',
      description: 'Automated content generation system architecture',
      date: '2025-01-17',
      status: 'deployed'
    },
    {
      id: 'blueprint-2025-01-17-130857',
      name: 'Edge Computing Network Blueprint',
      description: 'Distributed computing architecture for global performance',
      date: '2025-01-17',
      status: 'development'
    },
    {
      id: 'blueprint-2025-01-17-130921',
      name: 'Quantum Integration Blueprint',
      description: 'Quantum computing integration framework',
<<<<<<< HEAD
=======

      date: '2025-01-17',
      status: 'research'
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      id: 'blueprint - 2025 - 01 - 17 - 130835',
      name: 'AI Content Factory Blueprint',
      description: 'Automated content generation system architecture',
      date: '2025 - 01 - 17',
      status: 'deployed';
    },
    {
      id: 'blueprint - 2025 - 01 - 17 - 130857',
      name: 'Edge Computing Network Blueprint',
      description: 'Distributed computing architecture for global performance',
      date: '2025 - 01 - 17',
      status: 'development';
    },
    {
      id: 'blueprint - 2025 - 01 - 17 - 130921',
      name: 'Quantum Integration Blueprint',
      description: 'Quantum computing integration framework',

      date: '2025-01-17',
      status: 'research'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  ];



  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'deployed': return 'text-blue-400';
      case 'development': return 'text-yellow-400';
      case 'research': return 'text-purple-400';
      default: return 'text-gray-400';

  };


<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };


<<<<<<< HEAD
  const getComplexityColor = (complexity: string) => {
;
  const getComplexityColor = (complexity: string) =>: any {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const getComplexityColor = (complexity: string) => {
=======
;
  const getComplexityColor = (complexity: string) =>: any {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    switch (complexity) {

      case 'critical': return 'bg-red-500/20 text-red-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';

  };


<<<<<<< HEAD
<<<<<<< HEAD
      date: '2025-01-17',
      status: 'research'
    }
  ];

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
  ];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'deployed': return 'text-blue-400';
      case 'development': return 'text-yellow-400';
      case 'research': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  }
  };

      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };


  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'critical': return 'bg-red-500/20 text-red-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  }
  };

      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
      <Head>
        <title>System Blueprints - bolt.new.zion.app</title>
        <meta name="description" content="System architecture blueprints and deployment patterns" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container mx-auto px-4 py-8">
<<<<<<< HEAD

<<<<<<< HEAD
        {/* Header */}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        {/* Header */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mb-8">
          <Link href="/reports" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Reports
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            System Blueprints
          </h1>
          <p className="text-gray-300 text-lg">
            Architectural patterns and deployment strategies for scalable systems
          </p>
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
        {/* Blueprint Overview */}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        {/* Blueprint Overview */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Blueprint Overview */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Total Blueprints</h3>
            <div className="text-4xl font-bold text-blue-400">27</div>
            <p className="text-gray-300 text-sm mt-2">Available patterns</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Active</h3>
            <div className="text-2xl font-bold text-green-400">18</div>
            <p className="text-gray-300 text-sm mt-2">Currently deployed</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">In Development</h3>
            <div className="text-2xl font-bold text-yellow-400">6</div>
            <p className="text-gray-300 text-sm mt-2">Under construction</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Research</h3>
            <div className="text-2xl font-bold text-purple-400">3</div>
            <p className="text-gray-300 text-sm mt-2">Conceptual phase</p>
          </div>
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
        {/* Blueprint Categories */}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        {/* Blueprint Categories */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Blueprint Categories */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Blueprint Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {blueprintCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">{category.category}</h3>
                <div className="space-y-4">
                  {category.blueprints.map((blueprint, blueprintIndex) => (
                    <div key={blueprintIndex} className="border-l-2 border-indigo-400/30 pl-4">
                      <div className="flex justify-between items-start mb-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 900 via - indigo - 900 to - gray - 900 text - white">;
      <Head>;
        <title > System Blueprints - bolt.new.zion.app</title>;
        <meta name="description" content="System architecture blueprints and deployment patterns" />;
        <meta name="viewport" content="width = device - width, initial - scale = 1" />;
      </Head>;
      <div className="container mx - auto px - 4 py - 8">;
        {/* Header */}
        <div className="mb - 8">;
          <Link href="/reports" className="text - cyan - 400 hover:text - cyan - 300 transition - colors">;
            ← Back to Reports;
          </Link>;
          <h1 className="text - 4xl font - bold mt - 4 mb - 2 bg - gradient - to - r from - indigo - 400 to - blue - 400 bg - clip - text text - transparent">;
            System Blueprints;
          </h1>;
          <p className="text - gray - 300 text - lg">;
            Architectural patterns and deployment strategies for scalable systems;
          </p>;
        </div>;
        {/* Blueprint Overview */}
        <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6 mb - 8">;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">Total Blueprints</h3>;
            <div className="text - 4xl font - bold text - blue - 400">27</div>;
            <p className="text - gray - 300 text - sm mt - 2">Available patterns</p>;
          </div>;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">Active</h3>;
            <div className="text - 2xl font - bold text - green - 400">18</div>;
            <p className="text - gray - 300 text - sm mt - 2">Currently deployed</p>;
          </div>;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">In Development</h3>;
            <div className="text - 2xl font - bold text - yellow - 400">6</div>;
            <p className="text - gray - 300 text - sm mt - 2">Under construction</p>;
          </div>;
          <div className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
            <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">Research</h3>;
            <div className="text - 2xl font - bold text - purple - 400">3</div>;
            <p className="text - gray - 300 text - sm mt - 2">Conceptual phase</p>;
          </div>;
        </div>;
        {/* Blueprint Categories */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Blueprint Categories</h2>;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
            {blueprint_categories.map ((category, category_index) => (
              <div key={category_index} className="bg - white / 10 rounded - xl p - 6 border border - white / 20">;
                <h3 className="text - xl font - semibold mb - 4 text - indigo - 400">{category.category}</h3>;
                <div className="space - y-4">;
                  {category.blueprints.map ((blueprint, blueprint_index) => (
                    <div key={blueprint_index} className="border - l-2 border - indigo - 400 / 30 pl - 4">;
                      <div className="flex justify - between items - start mb - 2">;
                        <Link;
                          href={`/reports / blueprints/${blueprint.id}`}
                          className="text - white font - medium hover:text - indigo - 300 transition - colors";
                        >;

<<<<<<< HEAD
<<<<<<< HEAD
                        <Link
                        <Link 
                          href={`/reports/blueprints/${blueprint.id}`}
                          className="text-white font-medium hover:text-indigo-300 transition-colors"
                        >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {blueprint.name}
                        </Link>;
                        <span className={`px - 2 py - 1 text - xs rounded - full ${getComplexityColor (blueprint.complexity)}`}>;
                          {blueprint.complexity}
                        </span>;
                      </div>;
                      <p className="text - gray - 300 text - sm mb - 2">{blueprint.description}</p>;
                      <div className="flex justify - between items - center text - xs">;
                        <span className={`${getStatusColor (blueprint.status)}`}>;
                          ● {blueprint.status}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{blueprint.description}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className={`${getStatusColor(blueprint.status)}`}>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          ● {blueprint.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                        </span>
                        <span className="text-gray-400">{blueprint.lastUpdated}</span>
                      </div>
                    </div>

                        </span>;
                        <span className="text - gray - 400">{blueprint.last_updated}</span>;
                      </div>;
                    </div>))}
                </div>;
              </div>))}
          </div>;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Recent Blueprints */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Recent Blueprints</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
            {recent_blueprints.map ((blueprint) => (
              <div key={blueprint.id} className="bg - white / 10 rounded - xl p - 6 border border - white / 20 hover:border - indigo - 400 / 30 transition - all duration - 300">;
                <div className="flex justify - between items - start mb - 4">;
                  <h3 className="text - lg font - semibold text - white">{blueprint.name}</h3>;
                  <span className={`px - 2 py - 1 text - xs rounded - full ${getStatusColor (blueprint.status)}`}>;
                    {blueprint.status}
<<<<<<< HEAD
=======


                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
              </div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </div>
        {/* Recent Blueprints */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Recent Blueprints</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentBlueprints.map((blueprint) => (
              <div key={blueprint.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{blueprint.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(blueprint.status)}`}>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {blueprint.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{blueprint.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{blueprint.date}</span>




                    className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
                  >
                    View Blueprint →
                  </Link>
                </div>
              </div>


            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </div>
        {/* Blueprint Benefits */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Blueprint Benefits</h2>
          <div className="bg-white/10 rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-6xl font-bold text-indigo-400 mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Proven Architecture</h3>
              <p className="text-gray-300 mb-6">




                scalability, reliability, and maintainability for your systems.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">10x</div>
                  <div className="text-gray-400 text-sm">Faster Deployment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">50%</div>
                  <div className="text-gray-400 text-sm">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-gray-400 text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-wrap gap-4 justify-center">
          <Link 

        {/* Navigation */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

        <div className="flex flex-wrap gap-4 justify-center">
          <Link


            href="/reports"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50"
          >
            All Reports
          </Link>




            href="/reports/performance"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50"
          >
            Performance
          </Link>




            href="/reports/innovation"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50"
          >
            Innovation
          </Link>
        </div>
      </div>
    </div>
  );

                  </span>;
                </div>;
                <p className="text - gray - 300 text - sm mb - 4">{blueprint.description}</p>;
                <div className="flex justify - between items - center">;
                  <span className="text - gray - 400 text - sm">{blueprint.date}</span>;
                  <Link;
                    href={`/reports / blueprints/${blueprint.id}`}
                    className="text - indigo - 400 hover:text - indigo - 300 text - sm transition - colors";
                  >;
                    View Blueprint →;
                  </Link>;
                </div>;
              </div>))}
          </div>;
        </div>;
        {/* Blueprint Benefits */}
        <div className="mb - 8">;
          <h2 className="text - 2xl font - bold mb - 6 text - white">Blueprint Benefits</h2>;
          <div className="bg - white / 10 rounded - xl p - 8 border border - white / 20">;
            <div className="text - center">;
              <div className="text - 6xl font - bold text - indigo - 400 mb - 4">🏗️</div>;
              <h3 className="text - xl font - semibold mb - 2 text - white">Proven Architecture</h3>;
              <p className="text - gray - 300 mb - 6">;
                Our blueprints provide battle - tested architectural patterns that ensure;
                scalability, reliability, and maintainability for your systems.;
              </p>;
              <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 4 text - center">;
                <div>;
                  <div className="text - 2xl font - bold text - green - 400">99.9%</div>;
                  <div className="text - gray - 400 text - sm">Uptime</div>;
                </div>;
                <div>;
                  <div className="text - 2xl font - bold text - blue - 400">10x</div>;
                  <div className="text - gray - 400 text - sm">Faster Deployment</div>;
                </div>;
                <div>;
                  <div className="text - 2xl font - bold text - purple - 400">50%</div>;
                  <div className="text - gray - 400 text - sm">Cost Reduction</div>;
                </div>;
                <div>;
                  <div className="text - 2xl font - bold text - cyan - 400">24 / 7</div>;
                  <div className="text - gray - 400 text - sm">Monitoring</div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Navigation */}
        <div className="flex flex - wrap gap - 4 justify - center">;
          <Link;
            href="/reports";
            className="px - 6 py - 3 bg - white / 10 hover:bg - white / 20 border border - white / 20 rounded - lg text - white transition - all duration - 200 hover:border - indigo - 400 / 50";
          >;
            All Reports;
          </Link>;
          <Link;
            href="/reports / performance";
            className="px - 6 py - 3 bg - white / 10 hover:bg - white / 20 border border - white / 20 rounded - lg text - white transition - all duration - 200 hover:border - cyan - 400 / 50";
          >;
            Performance;
          </Link>;
          <Link;
            href="/reports / innovation";
            className="px - 6 py - 3 bg - white / 10 hover:bg - white / 20 border border - white / 20 rounded - lg text - white transition - all duration - 200 hover:border - purple - 400 / 50";
          >;
            Innovation;
          </Link>;
        </div>;
      </div>;
    </div>);
}
;

<<<<<<< HEAD
};

                          {blueprint.complexity}
                        <Link
                          href={`/reports/blueprints/${blueprint.id}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          className="text-white font-medium hover:text-indigo-300 transition-colors"
                        >
                          {blueprint.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </Link>
                        <span className={`px-2 py-1 text-xs rounded-full ${getComplexityColor(blueprint.complexity)}`}>
                          {blueprint.complexity  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{blueprint.description}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className={`${getStatusColor(blueprint.status)}`}>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          ● {blueprint.status}
                          ● {blueprint.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </span>
                        <span className="text-gray-400">{blueprint.lastUpdated}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Recent Blueprints */}
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
              </div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </div>
        {/* Recent Blueprints */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Recent Blueprints</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentBlueprints.map((blueprint) => (
              <div key={blueprint.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-indigo-400/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">{blueprint.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(blueprint.status)}`}>
                    {blueprint.status}
                    {blueprint.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{blueprint.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{blueprint.date}</span>
<<<<<<< HEAD
                  <Link 
                    href={`/reports/blueprints/${blueprint.id}`}
                  <Link
                    href={`/reports/blueprints/${blueprint.id}`}
                    href={`/reports/blueprints/${blueprint.id}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
                  >
                    View Blueprint →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Blueprint Benefits */}
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </div>
        {/* Blueprint Benefits */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Blueprint Benefits</h2>
          <div className="bg-white/10 rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-6xl font-bold text-indigo-400 mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Proven Architecture</h3>
              <p className="text-gray-300 mb-6">
<<<<<<< HEAD
                Our blueprints provide battle-tested architectural patterns that ensure
                Our blueprints provide battle-tested architectural patterns that ensure 
                Our blueprints provide battle-tested architectural patterns that ensure
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                scalability, reliability, and maintainability for your systems.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">10x</div>
                  <div className="text-gray-400 text-sm">Faster Deployment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">50%</div>
                  <div className="text-gray-400 text-sm">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-gray-400 text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
=======


        <div className="flex flex-wrap gap-4 justify-center">
          <Link 

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Navigation */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            href="/reports"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50"
          >
            All Reports
          </Link>
<<<<<<< HEAD
          <Link
          <Link 
          <Link
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            href="/reports/performance"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50"
          >
            Performance
          </Link>
<<<<<<< HEAD
          <Link
          <Link 
          <Link
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            href="/reports/innovation"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50"
          >
            Innovation
          </Link>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
};

=======
=======
=======
;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default BlueprintsIndexPage;