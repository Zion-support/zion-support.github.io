'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, Users, Lock, BarChart, CheckCircle, ArrowRight, Zap, Brain } from 'lucide-react';
const MedicalRecordsManagerPage: React.FC = () => {
  const features = const features = const features = [
    {        <title>Medical Records Manager | Zion Tech Group - Secure Healthcare Data Management</title>
        <meta name="description" content="Secure, HIPAA-compliant medical records management system with AI-powered insights. Streamline healthcare data management and improve patient care." />
        <meta name="keywords" content="medical records management, HIPAA compliance, healthcare data, patient records, medical software, healthcare analytics" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        </div></div>
        <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
                Medical Records Manager,
  </h1></h1></
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Secure, HIPAA-compliant medical records management system with AI-powered insights to streamline healthcare data management and improve patient care.
              </p></p></p>
            </div>)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">)
              {features.map((feature, index) => (
                </div></div><div;
                  key=index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  </div></div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    </div></div><feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3></h3></h3>
                  <p className="text-gray-300">{feature.description}</p></p></p>)
                </div>)
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MedicalRecordsManagerPage;
  </h1>
