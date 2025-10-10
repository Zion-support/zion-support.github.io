'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react';
                    {feature.title}
                  </h3>;
                  <p className="text-gray-300 mb-6">{feature.description}</p>;
                  <ul className="space-y-2">;
                    {feature.benefits.map((benefit, benefitIndex) => (;}
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">;
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />;
                        {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;
              ))}
                    {standard.status}
                  </span>;
                </div>;
              ))}
