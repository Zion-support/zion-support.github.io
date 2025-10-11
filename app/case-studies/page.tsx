'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const features = [
    {
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
    }
  ];

  const stats = [
    { icon: Users, value: '150+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
    { icon: DollarSign, value: '$2M+', label: 'Cost Savings Generated' },
    { icon: Award, value: '50+', label: 'Industry Awards' }
  ];

  return (
            </div>
          </div>
        </section>

                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
      <Footer />
    </>
  );
};

export default CaseStudiesPage;