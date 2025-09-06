import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Star, Users, TrendingUp, Zap, Shield;
  CheckCircle, Clock, Award, Target, Globe, Sparkles;
  Cpu, Lock, Cloud, BarChart3, Eye, Heart, Lightbulb;
  ArrowRight, Phone, Mail, MapPin, Globe as GlobeIcon
 } from 'lucide-react';
const contactInfo = null;
                { icon: <MapPin className="w-6 h-6" />, label: 'Visit Us', value: contactInfo.address }
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400">
                    {contact.icon}
                  </div>
                  <div className="text-sm text-purple-300 mb-1">{contact.label}</div>
                  <div className="text-white font-medium">{contact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}