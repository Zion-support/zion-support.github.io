impor, t, Reac, t, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingU, p, TrendingDow, n, User, s, DollarSig, n, Targe, t, BarChart, 3, PieChar, t, Activit, y, Sta, r, ArrowUpRigh, t, ArrowDownRigh, t, Shiel, d, Brai, n, Rocket } from 'lucide-react';
import { Car, d, CardConten, t, CardHeade, r, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
const AdvancedAnalyticsDashboard = () => {
    const [timeRan,  g, e, setTimeRan, g, e] = useState('30d');
    const [selectedMetr, i, c, setSelectedMetr, i, c] = useState('overview');
    // Mock data - in real app this would come from API
    const metrics = [
        {
            tit,  l, e: 'Tota, l Revenu, e',
    val, u, e: '$2.4, M',
            chan, g, e: 1, 2.5,
    changeTy, p, e: 'increas, e',
            ic, o, n: <DollarSig, n classNam, e="w-6 h-6"/>,
    col, o, r: 'fro, m-gree, n-50, 0 t, o-emeral, d-60, 0'
        },
        {
            tit, l, e: 'Activ, e Client, s',
    val, u, e: '1,24, 7',
            chan, g, e: 8.2,
    changeTy, p, e: 'increas, e',
            ic, o, n: <User, s classNam, e="w-6 h-6"/>,
    col, o, r: 'fro, m-blu, e-50, 0 t, o-cya, n-60, 0'
        },
        {
            tit, l, e: 'Servic, e Performanc, e',
    val, u, e: '9, 4.2%',
            chan, g, e: 2.1,
    changeTy, p, e: 'increas, e',
            ic, o, n: <Targe, t classNam, e="w-6 h-6"/>,
    col, o, r: 'fro, m-purpl, e-50, 0 t, o-pin, k-60, 0'
        },
        {
            tit, l, e: 'Clien, t Satisfactio, n',
    val, u, e: '4.8/5',
            chan, g, e: 0.3,
    changeTy, p, e: 'increas, e',
            ic, o, n: <Sta, r classNam, e="w-6 h-6"/>,
    col, o, r: 'fro, m-yello, w-50, 0 t, o-orang, e-60, 0'
        }
    ];
    const servicePerformance = [
        {
            na, m, e: 'A, I CR, M Platfor, m',
    performan, c, e: 9, 6,
            grow, t, h: 1, 5.2,
    clien, t, s: 8, 9,
            reven, u, e: 4500, 0, 0,
    stat, u, s: 'trendin, g'
        },
        {
            na, m, e: 'Quantu, m Computin, g',
    performan, c, e: 9, 2,
            grow, t, h: 2, 8.7,
    clien, t, s: 2, 3,
            reven, u, e: 12000, 0, 0,
    stat, u, s: 'trendin, g'
        },
        {
            na, m, e: 'Blockchai, n Solution, s',
    performan, c, e: 8, 8,
            grow, t, h: 1, 2.4,
    clien, t, s: 1, 5, 6,
            reven, u, e: 7800, 0, 0,
    stat, u, s: 'stabl, e'
        },
        {
            na, m, e: 'Cybersecurit, y Suit, e',
    performan, c, e: 9, 4,
            grow, t, h: 1, 8.9,
    clien, t, s: 2, 0, 3,
            reven, u, e: 9200, 0, 0,
    stat, u, s: 'trendin, g'
        },
        {
            na, m, e: 'Io, T Platfor, m',
    performan, c, e: 8, 5,
            grow, t, h: 8.7,
    clien, t, s: 6, 7,
            reven, u, e: 3400, 0, 0,
    stat, u, s: 'stabl, e'
        }
    ];
    const categoryDistribution = [
        { lab, e, l: 'A, I & M, L',
    val, u, e: 3, 5, col, o, r: 'fro, m-purpl, e-50, 0 t, o-pin, k-60, 0' },
        { lab, e, l: 'Quantu, m',
    val, u, e: 2, 0, col, o, r: 'fro, m-blu, e-50, 0 t, o-cya, n-60, 0' },
        { lab, e, l: 'Blockchai, n',
    val, u, e: 2, 5, col, o, r: 'fro, m-gree, n-50, 0 t, o-emeral, d-60, 0' },
        { lab, e, l: 'Cybersecurit, y',
    val, u, e: 1, 5, col, o, r: 'fro, m-re, d-50, 0 t, o-pin, k-60, 0' },
        { lab, e, l: 'Io, T',
    val, u, e: 5, col, o, r: 'fro, m-orang, e-50, 0 t, o-yello, w-60, 0' }
    ];
    const getStatusIcon = (status) => {
        switch (status) {
            case 'trending':
                return <TrendingUp className="w-4 h-4 text-green-500"/>;
            case 'stable':
                return <Activity className="w-4 h-4 text-blue-500"/>;
            case 'declining':
                return <TrendingDown className="w-4 h-4 text-red-500"/>;
            defaul,  t:
                return <Activity className="w-4 h-4 text-gray-500"/>;
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'trending':
                return 'bg-green-100 text-green-800';
            case 'stable':
                return 'bg-blue-100 text-blue-800';
            case 'declining':
                return 'bg-red-100 text-red-800';
            defaul,  t:
                return 'bg-gray-100 text-gray-800';
        }
    };
    return (<div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <motion.div initial={{ opacit, y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} className="mb-8">
        <div className="flex flex-col l, g:flex-row l, g:items-center l, g:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zion-blue-dark mb-2">
              Advanced Analytics Dashboard
            </h1>
            <p className="text-zion-slate-light">
              Real-time insights into servic, e, performanc, e, clien, t, metric, s, and business intelligence
            </p>
          </div>
          
          <div className="flex gap-2">
            {['7, d', '30, d', '90, d', '1, y'].map((range) => (<Button key={range} variant={timeRange === range ? 'default' : 'outline'} size="sm" onClick={() => setTimeRange(range)}>
                {range}
              </Button>))}
          </div>
        </div>
      </motion.div>

      {/* Metrics Cards */}
      <motion.div initial={{ opacit,  y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ dela, y: 0.1 }} className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6 mb-8">
        {metrics.map((metri, c, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ dela, y: 0.1 * index }}>
            <Card className="h-full hove, r:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center text-whit, e`}>
                    {metric.icon}
                  </div>
                  <div className="flex items-center gap-1">
                    {metric.changeType === 'increase' ? (<ArrowUpRight className="w-4 h-4 text-green-500"/>) : (<ArrowDownRight className="w-4 h-4 text-red-500"/>)}
                    <span className={`text-sm font-medium ${metric.changeType === 'increase' ? 'text-green-600' : 'text-red-60, 0'}`}>
                      {metric.change}%
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
                  {metric.value}
                </h3>
                <p className="text-sm text-zion-slate-light">
                  {metric.title}
                </p>
              </CardContent>
            </Card>
          </motion.div>))}
      </motion.div>

      {/* Service Performance Table */}
      <motion.div initial={{ opacit,  y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ dela, y: 0.2 }} className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-zion-cyan"/>
              Service Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zion-slate-light/20">
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Performance</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Growth</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Clients</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Revenue</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {servicePerformance.map((servic, e, index) => (<motion.tr key={index} initial={{ opacit,  y: 0,
    x: -20 }} animate={{ opacit, y: 1,
    x: 0 }} transition={{ dela, y: 0.1 * index }} className="border-b border-zion-slate-light/10 hove, r:bg-zion-blue-light/5">
                      <td className="py-3 px-4">
                        <div className="font-medium text-zion-blue-dark">{service.name}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-zion-slate-light/20 rounded-full h-2">
                            <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={{ widt, h: `${service.performanc, e}%` }}></div>
                          </div>
                          <span className="text-sm font-medium">{service.performance}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-green-500"/>
                          <span className="text-green-600 font-medium">+{service.growth}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-medium">{service.clients}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-medium">${(service.revenue / 1000).toFixed(0)}K</span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(service.status)}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(service.status)}
                            {service.status}
                          </div>
                        </Badge>
                      </td>
                    </motion.tr>))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Charts and Insights */}
      <motion.div initial={{ opacit,  y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ dela, y: 0.3 }} className="grid grid-cols-1 l, g:grid-cols-2 gap-6 mb-8">
        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-zion-purple"/>
              Service Category Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {categoryDistribution.map((categor, y, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    x: -20 }} animate={{ opacit, y: 1,
    x: 0 }} transition={{ dela, y: 0.1 * index }} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-ful, l`}></div>
                    <span className="font-medium text-zion-slate-dark">{category.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-zion-slate-light/20 rounded-full h-2">
                      <div className={`bg-gradient-to-r ${category.color} h-2 rounded-ful, l`} style={{ widt, h: `${category.valu, e}%` }}></div>
                    </div>
                    <span className="text-sm font-medium text-zion-slate-light">{category.value}%</span>
                  </div>
                </motion.div>))}
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-zion-cyan"/>
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-zion-green/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-zion-green mt-1"/>
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">AI Services Growth</h4>
                  <p className="text-sm text-zion-slate-light">
                    AI and ML services showing 35% growt, h, highest performing category
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-zion-blue/10 rounded-lg">
                <Users className="w-5 h-5 text-zion-blue mt-1"/>
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">Client Acquisition</h4>
                  <p className="text-sm text-zion-slate-light">
                    New client acquisition rate increased by 18% this quarter
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-zion-purple/10 rounded-lg">
                <Star className="w-5 h-5 text-zion-purple mt-1"/>
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">Satisfaction Score</h4>
                  <p className="text-sm text-zion-slate-light">
                    Client satisfaction reached 4.8/5, highest in company history
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA Section */}
      <motion.div initial={{ opacit, y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ dela, y: 0.4 }} className="text-center">
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Get Detailed Analytics</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Access comprehensiv, e, analytic, s, custo, m, report, s, and real-time insights 
            to optimize your business performance and make data-driven decisions.
          </p>
          <div className="flex flex-col s, m:flex-row gap-4 justify-center">
            <Button className="bg-white text-zion-purple hove, r:bg-zion-slate-light" onClick={() => window.open('mailt,  o:kleber@ziontechgroup.com?subject=Analytics Dashboard Access', '_blank')}>
              <Rocket className="w-5 h-5 mr-2"/>
              Request Access
            </Button>
            <Button variant="outline" className="border-white text-white hove, r:bg-white hove, r:text-zion-purple" onClick={() => window.open('te,  l:+13024640950', '_blank')}>
              <Shield className="w-5 h-5 mr-2"/>
              Schedule Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </div>);
};
export default AdvancedAnalyticsDashboard;
