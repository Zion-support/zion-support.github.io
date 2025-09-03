
import {}
  TrendingUp,;
  TrendingDown,;
  Users,;
  DollarSign,;
  Target,;
  BarChart3,;
  PieChart,;
  Activity,;
  Star,;
  ArrowUpRight,;
  ArrowDownRight,';

      revenue: 340000',;
      status: &apos;stable&apos}
  ]';&apos;&apos;
  const categoryDistribution = [&apos;&apos;
    { label: &apos;AI & ML&apos;, value: 35, color: &apos;from-purple-500 to-pink-600&apos},&apos;{ label: &apos;Quantum&apos;, value: 20, color: &apos;from-blue-500 to-cyan-600&apos},&apos;{ label: &apos;Blockchain&apos;, value: 25, color: &apos;from-green-500 to-emerald-600&apos},&apos;{ label: &apos;Cybersecurity&apos;, value: 15, color: &apos;from-red-500 to-pink-600&apos},&apos;{ label: &apos;IoT&apos;, value: 5, color: &apos;from-orange-500 to-yellow-600&apos}
  ];&apos;&apos;
  const getStatusIcon = status => {}
    switch (status) {}
&apos;&apos;'';
      case &apos;trending&apos;:'&apos;&apos;

        return&apos;&apos; <TrendingUp className=&apos;w-4 h-4 text-green-500&apos; />&apos;;';
      case &apos;stable&apos;:'&apos;&apos;

        return&apos;&apos; <Activity className=&apos;w-4 h-4 text-blue-500&apos; />&apos;;';
      case &apos;declining&apos;:'&apos;&apos;'
        return&apos;&apos; <TrendingDown className=&apos;w-4 h-4 text-red-500&apos; />';
;
      default:&apos;&apos;&apos;
        return&apos;&apos; <Activity className=&apos;w-4 h-4 text-gray-500&apos; />

    }
  }&apos;
  const getStatusColor = status => {}
    switch (status) {}

        return 'bg-gray-100 text-gray-800'}

  }';';

              Real-time insights into service performance, client metrics, and;
              business intelligence&apos;
            </p>

''''
          <div className='flex gap-2'>'{['7d', 30d',90d', 1y'].map(range => (

              <Button;
                key={range}&apos;&apos;'';
                variant={timeRange === range ? &apos;default&apos; : &apos;outline&apos}'&apos;&apos;
;
                size=&apos;sm&apos;&apos;;
                onClick={() => setTimeRange(range)}
              >{range}&apos;&apos;
              </Button>

            ))}
          </div>;
        </div>;
      </motion.div>;
      {/* Metrics Cards */}
      <motion.div;
        initial={{ opacity: 0, y: 20 }}


          <motion.div;
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

              </CardContent>
            </Card>
          </motion.div>

        ))}
      </motion.div>;
      {/* Service Performance Table */}
      <motion.div;
        initial={{ opacity: 0, y: 20 }}

                    </th>
                  </tr>
                </thead>
                <tbody>
                  {servicePerformance.map((service, index) => (}
                    <motion.tr;
                      key={index}
                      initial={{ opacity: 0, x: -20 }}, {getStatusIcon(service.status)}, {service.status}&apos;
                          </div>
                        </Badge>
                      </td>
                    </motion.tr>

                  ))}
                </tbody>;
              </table>;
            </div>;
          </CardContent>;
        </Card>;
      </motion.div>;
      {/* Charts and Insights */}
      <motion.div;
        initial={{ opacity: 0, y: 20 }}

                    </span>
                  </div>
                </motion.div>

              ))}
            </div>;
          </CardContent>;
        </Card>;
        {/* Key Insights */}

                    AI and ML services showing 35% growth, highest performing;
                    category&apos;
                  </p>
                </div>

''''
              <div className='flex items-start gap-3 p-3 bg-zion-blue/10 rounded-lg'>''''
                <Users className='w-5 h-5 text-zion-blue mt-1' />''''
                <div>''''
                  <h4 className='font-semibold text-zion-slate-dark'>
                    Client Acquisition''''
                  </h4>''''
                  <p className='text-sm text-zion-slate-light'>
                    New client acquisition rate increased by 18% this quarter
                  </p>
                </div>
              </div>''''
''''
              <div className='flex items-start gap-3 p-3 bg-zion-purple/10 rounded-lg'>''''
                <Star className='w-5 h-5 text-zion-purple mt-1' />''''
                <div>''''
                  <h4 className='font-semibold text-zion-slate-dark'>
                    Satisfaction Score''''
                  </h4>''''
                  <p className='text-sm text-zion-slate-light'>
                    Client satisfaction reached 4.8/5, highest in comp history

                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      {/* CTA Section */}
      <motion.div;
        initial={{ opacity: 0, y: 20 }}

            </Button>
          </div>
        </div>
      </motion.div>

    </div>)}
export default AdvancedAnalyticsDashboard;
export { AdvancedAnalyticsDashboard }
;
export { AdvancedAnalyticsDashboard }
;
export { AdvancedAnalyticsDashboard }

export { AdvancedAnalyticsDashboard }



