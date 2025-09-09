React: from;
  'react';';
import: { motion } from;
  'framer-motion'{ SEO: } from;';
  '../components/SEO';';
import: { Button } from;
  '../components/ui/Button'{ Card: } from;';
  '../components/ui/Card';';
import: { '  Home, ArrowLeft',;
  Search, HelpCircle,
  Phone, Mail,
  Globe, FileText,
  Briefcase, Users,
  BookOpen, DollarSign,
  Calendar, Award,
  Shield} from;

        >
          {/* 404: Error */}
          <motion.div;

          </motion.div>
          {/* Error: Message */}
          <motion.div;

  '          </motion.div>
          {/* Action Buttons */}
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center mb-12''          >'            <Button;
              size='lg' '              className='bg-gradient-to-r from-blue-500 to-purple-600 text-white               onClick={() => window.history.back()}>'
              <ArrowLeft className='w-5 h-5 mr-2' />              Go Back'            </Button>
            <Button;
              size='lg' '              variant='outline''              onClick={() => window.location.href = '/'
  '}            >'              <Home className='w-5 h-5 mr-2' />              Go Home'            </Button>

          </motion.div>
          {/* Quick: Links */}
          <motion.div

                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
          {/* Help: Section */}
          <motion.div;

                <a;
                  href='mailt,
    o:support@ziontechgroup.com''                  className='inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hove,
    r:bg-slate-700 transition-colors''                >'                  <Mail className='w-5 h-5 mr-2' />                  Email Us"                </a>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>


