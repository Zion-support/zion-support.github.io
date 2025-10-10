'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight, Star, Award, Target, Clock, Settings, Lock, Database, Smartphone, Eye, Sparkles } from 'lucide-react';
      {/* Stats Section */}
      <section className="py-20 px-4"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>;
            {stats.map((stat, index) => (;}
              <div key={index} className="text-center"></div>;
                <div className="flex justify-center mb-4"></div>;
                  <stat.icon className="w-12 h-12 text-purple-400" />;
                </div>;
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>;
                <div className="text-gray-300 text-sm">{stat.label}</div>;
              </div>;
            ))}
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
                  ))}
                </ul>;
              </div>;
            ))}
