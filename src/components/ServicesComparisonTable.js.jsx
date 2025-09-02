import React from 'react';'
import { Check, X, Star, Clock, Phone, Mail } from 'lucide - react";'"
";'"'"
import { Badge } from './ui/badge';"'"'"
import { Button } from './ui/button';"''"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';import { Check, X, Star, Clock, Phone, Mail } from 'lucide-react';"'"
import {}"'
  COMPREHENSIVE_SERVICES,'"
  CONTACT_INFO} from '@/data/comprehensiveServices'"'"
export function ServicesComparisonTable() {}"'
'
'
'
  const serviceCategories = ['AI Services',IT Services',Micro SAAS']"
  const getFeatureIcon = hasFeature => {}"'"
    return hasFeature ? ("'"'"
      <Check className='w-4 h-4 text-green-500' /" ></Check>;'"
    ) : (;'"'"
      <X className='w-4 h-4 text-red-500' /" ></X>;"'"
    );",''
}';'
  return (''
    <div className='py-16 bg-slate-50 dark:bg-slate-900'></div>''
      <div className='container mx-auto px-4'></div>''"
        <div className='text-center mb-12'></div>'"'"
          <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'></h2>"'
            Services Comparison'
          </h2>''
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'></p>
            Compare our comprehensive service offerings to find the perfect
            solution for your business needs"
          </p>"'"
        </div>"'
'
        {/* Service Categories Overview */}''
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'></div>
          {serviceCategories.map(category => {}
            const services = getCategoryServices(category)
            const avgPrice =
              services.reduce((sum, service) => sum + (service.price || 0), 0) /"
              services.length"'"
            return()"'
              <Card '"
                key={category}'"'"
                className='border-2 border-slate-200 dark:border-slate-700" ></Card>''"
                <CardHeader className='text-center'></CardHeader>'"'"
                  <CardTitle className='text-slate-900 dark:text-white'></CardTitle>"'
                    {category}'
                  </CardTitle>''"
                  <CardDescription className='text-slate-600 dark:text-slate-300'></CardDescription>"'"
                    {services.length} services available"'
                  </CardDescription>'
                </CardHeader>''"
                <CardContent className='text-center'></CardContent>'"'"
                  <div className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'></div>"'
                    ${Math.round(avgPrice).toLocaleString()}'
                  </div>''"
                  <p className='text-sm text-slate-500 dark:text-slate-400 mb-4'></p>"'"
                    Average starting price"'
                  </p>'
                  <Button''
                    variant='outline''
                    className='w-full border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white '></Button>
                    View {category}
                  </Button>
                </CardContent>
              </Card>
            ),"
})}"'"
        </div>"'
'
        {/* Detailed Comparison Table */}''"
        <div className='bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden'></div>'"'"
          <div className='overflow-x-auto'></div>"'
            <Table></Table>'
              <TableHeader></TableHeader>''"
                <TableRow className='bg-slate-100 dark:bg-slate-700'></TableRow>'"'"
                  <TableHead className='text-slate-900 dark:text-white font-semibold'></TableHead>"'
                    Service Features'"
                  </TableHead>'"'"
                  <TableHead className='text-center text-slate-900 dark:text-white font-semibold'></TableHead>"'
                    AI Services'"
                  </TableHead>'"'"
                  <TableHead className='text-center text-slate-900 dark:text-white font-semibold'></TableHead>"'
                    IT Services'
                  </TableHead>''
                  <TableHead className='text-center text-slate-900 dark:text-white font-semibold'></TableHead>
                    Micro SAAS
                  </TableHead>"
                </TableRow>"'"
              </TableHeader>"'
              <TableBody></TableBody>'"
                <TableRow></TableRow>'"'"
                  <TableCell className='font-medium'></TableCell>"'
                    Starting Price Range'
                  </TableCell>''"
                  <TableCell className='text-center'></TableCel>$299 - $8,999</TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    $4,499 - $12,999'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCel>$199 - $799</TableCell>"'
                </TableRow>'"
                <TableRow></TableRow>'"'"
                  <TableCell className='font-medium'></TableCell>"'
                    Implementation Time'
                  </TableCell>''
                  <TableCell className='text-center'></TableCel>1-6 weeks</TableCell>''
                  <TableCell className='text-center'></TableCel>2-6 weeks</TableCell>''
                  <TableCell className='text-center'></TableCell>"
                    Immediate - 3 weeks"'"
                  </TableCell>"'
                </TableRow>'
                <TableRow></TableRow>''"
                  <TableCell className='font-medium'></TableCel>24/7 Support</TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'
                  </TableCell>''
                  <TableCell className='text-center'></TableCell>"
                    {getFeatureIcon(false)}"'"
                  </TableCell>"'
                </TableRow>'"
                <TableRow></TableRow>'"'"
                  <TableCell className='font-medium'></TableCell>"'
                    Custom Development'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'
                  </TableCell>''
                  <TableCell className='text-center'></TableCell>"
                    {getFeatureIcon(false)}"'"
                  </TableCell>"'
                </TableRow>'
                <TableRow></TableRow>''"
                  <TableCell className='font-medium'></TableCel>API Access</TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'
                  </TableCell>''
                  <TableCell className='text-center'></TableCell>"
                    {getFeatureIcon(true)}"'"
                  </TableCell>"'
                </TableRow>'"
                <TableRow></TableRow>'"'"
                  <TableCell className='font-medium'></TableCell>"'
                    Training & Documentation'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'
                  </TableCell>''
                  <TableCell className='text-center'></TableCell>"
                    {getFeatureIcon(false)}"'"
                  </TableCell>"'
                </TableRow>'"
                <TableRow></TableRow>'"'"
                  <TableCell className='font-medium'></TableCell>"'
                    Compliance Certifications'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'
                  </TableCell>''
                  <TableCell className='text-center'></TableCell>"
                    {getFeatureIcon(false)}"'"
                  </TableCell>"'
                </TableRow>'
                <TableRow></TableRow>''"
                  <TableCell className='font-medium'></TableCel>Scalability</TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'"
                  </TableCell>'"'"
                  <TableCell className='text-center'></TableCell>"'
                    {getFeatureIcon(true)}'
                  </TableCell>''
                  <TableCell className='text-center'></TableCell>
                    {getFeatureIcon(true)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>"
          </div>"'"
        </div>"'
'
        {/* Contact Information */}''
        <div className='mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800'></div>''"
          <div className='text-center mb-8'></div>'"'"
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'></h3>"'
              Need Help Choosing?'
            </h3>''
            <p className='text-slate-600 dark:text-slate-300'></p>
              Our expert team is here to help you select the perfect service for"
              your business needs"'"
            </p>"'
          </div>'
''
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'></div>''"
            <div className='text-center'></div>'"'"
              <Phone className='w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2' /" ></Phone>'"'"
              <h4 className='font-semibold text-slate-900 dark:text-white mb-1'></h4>"'
                Call Us'
              </h4>''"
              <p className='text-blue-600 dark:text-blue-400'></p>"'"
                {CONTACT_INFO.mobile}"'
              </p>'
            </div>''"
            <div className='text-center'></div>'"'"
              <Mail className='w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2' /" ></Mail>'"'"
              <h4 className='font-semibold text-slate-900 dark:text-white mb-1'></h4>"'
                Email Us'
              </h4>''"
              <p className='text-blue-600 dark:text-blue-400'></p>"'"
                {CONTACT_INFO.email}"'
              </p>'
            </div>''"
            <div className='text-center'></div>'"'"
              <Clock className='w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2' /" ></Clock>'"'"
              <h4 className='font-semibold text-slate-900 dark:text-white mb-1'></h4>"'
                Response Time'
              </h4>''
              <p className='text-blue-600 dark:text-blue-400'></p>
                {CONTACT_INFO.responseTime}"
              </p>"'"
            </div>"'
          </div>'
''
          <div className='text-center'></div>'
            <Button ''"
              size='lg'"'"
              className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" ></Button>'"'"
              <Phone className='w-4 h-4 mr-2' /" ></Phone>
              Schedule Free Consultation
            </Button>"
          </div>"'"
        </div>"'
'
        {/* Service Highlights */}''"
        <div className='mt-16'></div>'"'"
          <h3 className='text-3xl font-bold text-slate-900 dark:text-white text-center mb-12'></h3>"'
            Service Highlights'
          </h3>''
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'></div>"
            {COMPREHENSIVE_SERVICES.filter(service => service.featured).map()"'"
              service => ("'
                <Card '"
                  key={service.id}'"'"
                  className='border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors" ></Card>''
                  <CardHeader className='pb-3'></CardHeader>''"
                    <div className='flex items-center justify-between mb-2'></div>'"'"
                      <Badge className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white'></Badge>"'
                        Featured'
                      </Badge>''"
                      <div className='flex items-center gap-1'></div>'"'"
                        <Star className='w-4 h-4 text-yellow-500 fill-current' /" ></Star>''
                        <span className='text-sm font-medium'></span>"
                          {service.rating}"'"
                        </span>"'
                      </div>'"
                    </div>'"'"
                    <CardTitle className='text-slate-900 dark:text-white text-lg'></CardTitle>"'
                      {service.title}'
                    </CardTitle>''"
                    <CardDescription className='text-slate-600 dark:text-slate-300 text-sm'></CardDescription>"'"
                      {service.description.substring(0, 100)}..."'
                    </CardDescription>'
                  </CardHeader>''
                  <CardContent className='pt-0'></CardContent>''
                    <div className='flex items-center justify-between mb-4'></div>''
                      <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'></div>"
                        {service.currency}"'"
                        {service.price?.toLocaleString()}"'
                      </div>'
                      <Badge''
                        variant='outline''"
                        className='border-blue-500 text-blue-600 '></Badge>"'"
                        {service.category}"'
                      </Badge>'
                    </div>''
                    <Button className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'></Button>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </div>"
    </div>"'"
  )",'"'"
}'""",''
}''"
;'"'"