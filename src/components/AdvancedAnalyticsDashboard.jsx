import React { useState } from 'react'
export default function AdvancedAnalyticsDashboard() {return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">"
      <SEO title="AdvancedAnalyticsDashboard - Zion Tech Group" description="Professional AdvancedAnalyticsDashboard services by Zion Tech Group" />"
      <div className="container mx-auto px-4 py-20">"
        <h1 className="text-4xl font-bold text-white mb-8">AdvancedAnalyticsDashboard</h1>"
        <p className="text-gray-300 text-lg">
          Professional AdvancedAnalyticsDashboard services to help your business grow.
        </p>
      </div>;
  )};react&apos,framer-motion;
  TrendingUp,;
  TrendingDown,;
  Users,;
  DollarSign,;
  Target,;
  BarChart3,;
  PieChart,;
  Activity,;
  Star,;
  ArrowUpRight,
  ArrowDownRight,'
  Shield,'
  Brain,''
  Rocket} from 'lucide - react',
const AdvancedAnalyticsDashboard = () => {};
'
''
  const [timeRange, setTimeRange] = useState('30d')'
  const [selectedMetric, setSelectedMetric] = useState('overview');
  // Mock data - in real app this would come from API;
  const metrics = []{};
      title: 'Total Revenue',''
      value: '$2.4M','
      change: 12.5,''
      changeType: 'increase',';"
      icon: <DollarSign className = "w - 6 h-6" />,'',
      color: 'from - green-500 to-emerald-600'}, {}'
      title: 'Active Clients',',
      value: '1,247',,
      change: 8.2,''
      changeType: 'increase','';"
      icon: <Users className="w - 6 h-6" />,',
      color: 'from - blue-500 to-cyan-600'}, {}'
      title: 'Service Performance',',
      value: '94.2%','
change: 2.1,'';"
      icon: <Target className="w - 6 h-6" />,',
      color: 'from - purple-500 to-pink-600'}, {}'
      title: 'Client Satisfaction',',
      value: '4.8/5','
change: 0.3,'';"
      icon: <Star className="w - 6 h-6" />,',
      color: 'from-yellow-500 to-orange-600'}
  ]
  const servicePerformance = []{};
      name: 'AI CRM Platform',;
performance: 96,;
growth: 15.2,'
      clients: 89,'
      revenue: 450000,''
      status: 'trending'}, {}'
      name: 'Quantum Computing',
performance: 92,'
growth: 28.7,'
      clients: 23,'
      revenue: 1200000,''
      name: 'Blockchain Solutions',
performance: 88,'
growth: 12.4,'
      clients: 156,'
      revenue: 780000,''
      status: 'stable'}, {}'
      name: 'Cybersecurity Suite',
performance: 94,'
growth: 18.9,'
      clients: 203,'
      revenue: 920000,''
      name: 'IoT Platform',
performance: 85,
growth: 8.7,
clients: 67,
Shield,&apos;
  Brain,&apos;&apos;
  Rocket} from &apos;lucide-react&apos;./ui/card&apos;./ui/button&apos,./ui/badge';&apos;&apos;
&apos;
&apos;&apos;&apos;&apos,
  const [timeRange, setTimeRange] = useState(&apos;30d&apos)';&apos;&apos;
  const [selectedMetric, setSelectedMetric] = useState(&apos;overview&apos);
  // Mock data - in real app this would come from API;&apos;
&apos;&apos,
      title: &apos,Total Revenue&apos,'&apos;
      value: &apos,$2.4M&apos,&apos;
      change: 12.5,&apos;&apos,
      changeType: &apos,increase&apos,'&apos;"
      icon: &apos,&apos, <DollarSign className="&apos,w-6" h-6&apos, />,&apos;&apos;
      color: &apos,from-green-500 to-emerald-600&apos} {}'
      title: &apos,Active Clients&apos,;
      value: &apos,1,247&apos,'
      change: 8.2,&apos;&apos,'
      changeType: &apos,increase&apos,'&apos;&apos,"
      icon: &apos,&apos, <Users className="&apos,w-6" h-6&apos, />,;
      color: &apos,from-blue-500 to-cyan-600&apos} {}'
      title: &apos,Service Performance&apos,;
      value: &apos,94.2%&apos,'
      change: 2.1,&apos;&apos,';"
      icon: &apos,&apos, <Target className="&apos,w-6" h-6&apos, />,;
      color: &apos,from-purple-500 to-pink-600&apos} {}'
      title: &apos,Client Satisfaction&apos,;
      value: &apos,4.8/5&apos,'
      change: 0.3,&apos;&apos,';"
      icon: &apos,&apos, <Star className="&apos,w-6" h-6&apos, />,;
      color: &apos,from-yellow-500 to-orange-600&apos}
  ]&apos;&apos;
      name: &apos,AI CRM Platform&apos,
      performance: 96,
      clients: 89,&apos;
      revenue: 450000,&apos;&apos;
      status: &apos,trending&apos} {}
      name: &apos,Quantum Computing&apos,
      performance: 92,
      clients: 23,&apos;
      revenue: 1200000,&apos;&apos;
      name: &apos,Blockchain Solutions&apos,
      performance: 88,
      clients: 156,&apos;
      revenue: 780000,&apos;&apos;
      status: &apos,stable&apos} {}
      name: &apos,Cybersecurity Suite&apos,
      performance: 94,
      clients: 203,&apos;
      revenue: 920000,&apos;&apos;
      name: &apos,IoT Platform&apos,
      performance: 85,
      growth: 8.7,
      clients: 67,'
      revenue: 340000,;
      status: &apos,stable&apos}'
  ]';&apos;&apos;
  const categoryDistribution = [&apos;&apos { label: &apos,AI & ML&apos, value: 35, color: &apos,from-purple-500 to-pink-600&apos},&apos { label: &apos,Quantum&apos, value: 20, color: &apos,from-blue-500 to-cyan-600&apos},&apos { label: &apos,Blockchain&apos, value: 25, color: &apos,from-green-500 to-emerald-600&apos},&apos { label: &apos,Cybersecurity&apos, value: 15, color: &apos,from-red-500 to-pink-600&apos},&apos { label: &apos,IoT&apos, value: 5, color: &apos,from-orange-500 to-yellow-600&apos}
  const getStatusIcon = status => {};
    switch (status) {};
&apos;&apos,'
      case &apos;trending&apos;:'&apos;&apos,"
        return&apos;&apos; <TrendingUp className="&apos;w-4" h-4 text-green-500&apos; />&apos,
      case &apos;stable&apos;:'&apos;&apos,"
        return&apos;&apos; <Activity className="&apos;w-4" h-4 text-blue-500&apos; />&apos,
      case &apos;declining&apos;:'&apos;&apos,"
        return&apos;&apos; <TrendingDown className="&apos;w-4" h-4 text-red-500&apos; />'
      default: &apos,&apos,&apos,",
        return&apos;&apos; <Activity className = "&apos,w-4" h-4 text-gray-500&apos, />;''
  TrendingUp, TrendingDown,
  Users, DollarSign,
  Target, BarChart3,
  PieChart, Activity,
  Star, ArrowUpRight,'
  ArrowDownRight, ';''
  Shield, ''
  Brain, ''';''
  Rocket} from 'lucide - react'','''
'''
  // Mock data - in real app this would come from API,
      title: 'Total Revenue', ''','
      value: '$2.4M', ''
      change: 12.5, '''''
      changeType: 'increase', ''
      icon: <DollarSign className = "w - 6 h-6" />,''','
      color: 'from - green-500 to-emerald-600'} {}'
      title: 'Active Clients', ','
      value: '1, 247','
      change: 8.2, '''''
      changeType: 'increase', ''''
      icon: <Users className="w - 6 h-6" />,','
      color: 'from - blue-500 to-cyan-600'} {}'
      title: 'Service Performance', ','
      value: '94.2%', change: 2.1,''''
      icon: <Target className="w - 6 h-6" />,','
      color: 'from - purple-500 to-pink-600'} {}'
      title: 'Client Satisfaction', ','
      value: '4.8 / 5', change: 0.3,''''
      icon: <Star className="w - 6 h-6" />,','
      name: 'AI CRM Platform', performance: 96,'
      growth: 15.2, ','
      clients: 89, '',
      revenue: 450000, ''';''
      status: 'trending'} {}'
      name: 'Quantum Computing', performance: 92,'
      growth: 28.7, ';''
      clients: 23, ''
      revenue: 1200000, ''';''
      name: 'Blockchain Solutions', performance: 88,'
      growth: 12.4, ';''
      clients: 156, ''
      revenue: 780000, ''';''
      status: 'stable'} {}'
      name: 'Cybersecurity Suite', performance: 94,'
      growth: 18.9, ';''
      clients: 203, ''
      revenue: 920000, ''';''
      name: 'IoT Platform', performance: 85,
      growth: 8.7, clients: 67,'
      revenue: 340000, ';''
      status: 'stable'}'
  ]'
  const categoryDistribution = [' { label: 'AI & ML', value: 35, color: 'from-purple-500 to-pink-600' },'{ label: 'Quantum', value: 20, color: 'from-blue-500 to-cyan-600' },'{ label: 'Blockchain', value: 25, color: 'from-green-500 to-emerald-600' },'{ label: 'Cybersecurity', value: 15, color: 'from-red-500 to-pink-600' },'{ label: 'IoT', value: 5, color: 'from-orange-500 to-yellow-600' };
      case 'trending':'';"
        return <TrendingUp className="w-4 h-4 text-green-500" />';
      case 'stable':'';"
        return <Activity className="w-4 h-4 text-blue-500" />';
      case 'declining':'';"
        return <TrendingDown className="w-4 h-4 text-red-500" />';
      default: '',",
        return <Activity className = "w-4 h-4 text-gray-500" />,'
  ]',''
  const categoryDistribution = ['';
    { label: 'AI & ML', value: 35, color: 'from-purple-500 to-pink-600' }, '{ label: 'Quantum', value: 20, color: 'from-blue-500 to-cyan-600' },'{ label: 'Blockchain', value: 25, color: 'from-green-500 to-emerald-600' }, '{ label: 'Cybersecurity', value: 15, color: 'from-red-500 to-pink-600' },'{ label: 'IoT', value: 5, color: 'from-orange-500 to-yellow-600' };
'''';
      case 'trending': '''';
        return <TrendingUp className="w - 4 h-4 text-green-500" />'','
      case 'stable': ''''
        return <Activity className="w - 4 h-4 text-blue-500" />'','
      case 'declining': ''''
        return <TrendingDown className="w - 4 h-4 text-red-500" />',
      default: '''',
        return <Activity className = "w-4 h-4 text-gray-500" />};
  }&apos;
  const getStatusColor = status => {};
      case 'trending':'
        return 'bg-green-100 text-green-800';
      case 'stable':'
        return 'bg-blue-100 text-blue-800';
      case 'declining':'
        return 'bg-red-100 text-red-800';
      default: ;
      case &apos;trending&apos,:&apos,
        return &apos;bg-green-100 text-green-800;
      case &apos;stable&apos;:&apos,
        return &apos;bg-blue-100 text-blue-800;
      case &apos;declining&apos;:&apos,',
        return &apos;bg-red-100 text-red-800';,
default:&apos,
        return &apos,bg-gray-100 text-gray-800&apos};
      case 'trending': ''
      case 'stable': ''
      case 'declining': ''
      default: '','
        return 'bg-gray-100 text-gray-800'};
  }';''
  return ('''';
    <div className = "max - w-7xl mx-auto p-6">,
}',
  return ('';"
    <div className = "max-w-7xl mx-auto p-6"> {/*   */};
      <motion.div;"
        initial="{{" opacity: 0, y: 20 }}'';"
        animate="{{" opacity: 1, y: 0 }}'';"
        className="mb-8">'';"'
        <div className="flex flex - col lg: flex-row lg:items-center lg:justify-between gap-4">'',
          <div>'';"
            <h1 className="text-3xl font-bold text-zion-blue-dark mb-2">,
              Advanced Analytics Dashboard'',',
            </h1>'',"
            <p className = "text-zion-slate-light">,;
              Real-time insights into service performance, client metrics, and;
              business intelligence;
            </p>
          </div>'';"
          <div className="flex gap-2">'{['7d',30d',90d',1y'].map(range => (;
              <Button,
                key={range}'';"
                variant="{timeRange" === range ? 'default'  : 'outline'}''>
                size='sm'';"
                onClick = "{()" => setTimeRange(range)}
              >{range};
              </Button>
  return (&apos;&apos,&apos;&apos,"
    <div className="&apos;max-w-7xl" mx-auto p-6&apos;>
      {/*   */}&apos;"
        initial="{{" opacity: 0, y: 20 }}&apos;&apos;"
        animate="{{" opacity: 1, y: 0 }}&apos;&apos,'
        className="&apos;mb-8&apos;&apos,&apos;">'&apos;&apos,&apos;&apos;"
        <div className="&apos;flex" flex-col lg:flex-row lg:items-center l,g: justify-between gap-4&apos;>'&apos,&apos,''
          <div>&apos;&apos,&apos;&apos,"
            <h1 className="&apos;text-3xl" font-bold text-zion-blue-dark mb-2&apos;>'
              Advanced Analytics Dashboard&apos;&apos,&apos;&apos,
            </h1>&apos;&apos,&apos;&apos,',
            <p className = "&apos,text-zion-slate-light&apos,">";
        initial = "{{" opacity: 0, y: 20 }}''',
        animate="{{" opacity: 1, y: 0 }}'''';"
        className = "mb-8"''>''''''
        <div className="flex flex-col lg: flex-row lg:items-center lg:justify-between gap-4">'''''
          <div>''''
            <h1 className="text-3xl font-bold text-zion-blue-dark mb-2">'
              Advanced Analytics Dashboard'''''
            </h1>''''
            <p className="text-zion-slate-light">,
              Real-time insights into service performance, client metrics, and,
business intelligence'
          </div>''';
              business intelligence&apos;
          </div>&apos;&apos,
&apos;&apos,&apos;&apos,"
          <div className="&apos;flex" gap-2&apos;>&apos {[&apos;7d&apos,30d&apos,90d&apos,1y&apos].map(range = > (&apos}&apos,
          </div>''',
          <div className = "flex gap-2">'{['7d', 30d',90d', 1y'].map(range => (;
                key={range}&apos;&apos,';"
                variant="{timeRange" === range ? &apos;default&apos; : &apos;outline&apos}'&apos;&apos;"
                size="&apos;sm&apos;&apos;"
              >{range}&apos;&apos;
              </Button>
            ))}
          </div>;
      </motion.div> {/*   */}"
        initial = "{{" opacity: 0, y: 20 }}";
        transition="{{" delay: 0.1 }}'';"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">{metrics.map((metric, index) => (;"
        animate="{{" opacity: 1, y: 0 }}&apos;&apos;"
        transition="{{" delay: 0.1 }}&apos;&apos,';"
        className="&apos;grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-4 gap-6 mb-8 &apos,>{metrics.map((metric, index) => (&apos}&apos;"
        animate = "{{" opacity: 1, y: 0 }}''',
        transition="{{" delay: 0.1 }}'''';"
        className = "grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">{metrics.map((metric, index) => ("
            key="{index}""
            animate="{{" opacity: 1, y: 0 }}";
            transition="{{" delay: 0.1 * index }}''>'';"
            <Card className="h-full hover: shadow-lg transition-shadow">'',"
              <CardHeader className="pb-3">'',",
                <div className = "flex items-center justify-between">,"
                  <div className="{`w-12" h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center text-white`}>
                  >{metric.icon}'';"
                  <div className="flex items-center gap-1">''{metric.changeType === 'increase' ? ('';"
                      <ArrowUpRight className="w-4 h-4 text-green-500" />'') : ('';"
                      <ArrowDownRight className = "w - 4 h-4 text-red-500" />,
                    )}'`,
                    <span'`'`;"
                      className = "{`text-sm" font-medium ${metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                    >{metric.change}%;
                    </span>
              </CardHeader>''
              <CardContent>'';"
                <h3 className="text - 2xl font-bold text-zion-blue-dark mb-1"> {metric.value}'',
                </h3>'';"
                <p className="text-sm text-zion-slate-light">{metric.title}</p>;
              </CardContent>;
            </Card>;
          </motion.div>;"
            transition="{{" delay: 0.1 * index }}&apos;&apos,>&apos;&apos,&apos;&apos,"
            <Card className="&apos;h-full" hover: shadow-lg transition-shadow&apos;>'&apos,&apos,&apos;&apos;"
              <CardHeader className="&apos;pb-3&apos;">'&apos;&apos,&apos;&apos,",
                <div className="&apos;flex" items-center justify-between&apos,>&apos,'
                  <div'
                  >{metric.icon}&apos;&apos,&apos;&apos,
                  </div>&apos;&apos,&apos;&apos,"
                  <div className="&apos;flex" items-center gap-1&apos;>'&apos;&apos,{metric.changeType === &apos;increase&apos; ? (&apos;&apos,&apos;&apos}'
                      <ArrowUpRight className="&apos;w-4" h-4 text-green-500&apos; />&apos;&apos,) : (&apos;&apos,&apos;&apos,"
                      <ArrowDownRight className="&apos;w-4" h-4 text-red-500&apos; />'
                    )}&apos;`&apos,
                    <span&apos;`&apos;`"
                      className="{`text-sm" font-medium ${metric.changeType === &apos;increase&apos; ? &apos;text-green-600&apos; : &apos;text-red-600&apos}`}
                    >{metric.change}%&apos;&apos;
                    </span>'
              </CardHeader>&apos;&apos,&apos;&apos,
              <CardContent>&apos;&apos,&apos;&apos,"
                <h3 className="&apos;text-2xl" font-bold text-zion-blue-dark mb-1&apos;>'
                  {metric.value}&apos;&apos,&apos;&apos,
                </h3>&apos;&apos,&apos;&apos,"
                <p className="&apos;text-sm" text-zion-slate-light&apos;>{metric.title}&apos;</p>"
            transition = "{{" delay: 0.1 * index }}'''>'''''
            <Card className="h-full hover: shadow-lg transition-shadow">''''
              <CardHeader className="pb-3">''''
                <div className="flex items-center justify-between">',
                  >{metric.icon}''''
                  <div className="flex items-center gap-1">''''{metric.changeType === 'increase' ? (''''
                      <ArrowUpRight className="w-4 h-4 text-green-500" />''') : ('''''
                      <ArrowDownRight className="w-4 h-4 text-red-500" />'
                    )}'`''
                    <span'`'`
                    >{metric.change}%'
              </CardHeader>'''''
              <CardContent>''''
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">'
                  {metric.value}'''''
                </h3>''''
                <p className="text-sm text-zion-slate-light">{metric.title}</p>
              </CardContent>
            </Card>
          </motion.div>
      </motion.div> {/*   */}";
        transition="{{" delay: 0.2 }}'';"
        className = "mb - 8 ">,
        <Card>'',
          <CardHeader>'';"
            <CardTitle className="flex items-center gap-2">'';"
              <BarChart3 className="w-5 h-5 text-zion-cyan" />;
              Service Performance Overview;
            </CardTitle>;"
            <div className="overflow-x-auto">'';"
              <table className="w - full">'',
                <thead>'';"
                  <tr className="border-b border-zion-slate-light/20">'';"
                    <th className = "text - left py-3 px-4 font-semibold text-zion-slate-dark">,
                      Service'',
                    </th>''
                      Performance''
                      Growth''
                      Clients''
                      Revenue';
                      Status;
                    </th>;
                  </tr>;
                </thead>;
                <tbody> {servicePerformance.map((service, index) => (;
                    <motion.tr;"
                      initial = "{{" opacity: 0, x: -20 }}">
                      animate="{{" opacity: 1, x: 0 }}'';"
                      transition="{{" delay: 0.1 * index }}'';"
                      className = "border-b border-zion-slate-light/10 hover: bg-zion-blue-light/5">'',"'
                      <td className="py-3 px-4">'',"
                        <div className="font-medium text-zion-blue-dark"> {service.name};
                      </td>'';"
                        <div className="flex items-center gap-2">'';"
                          <div className="w - 16 bg-zion-slate-light/20 rounded-full h-2">'',
                            <div'`;"
                              className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"``;"
                              style = "{{" width: `${service.performance}%` }}>
                            ></div>'';"
                          <span className="text-sm font-medium"> {service.performance}%;"
                        <div className="flex items-center gap-1">'';"
                          <TrendingUp className="w-4 h-4 text-green-500" />'';"
                          <span className="text-green-600 font-medium">;
                            +{service.growth}%;"
                        <span className="font-medium">{service.clients}</span>'';"
                        <span className="font-medium">;
                          ${(service.revenue / 1000).toFixed(0)}K,
                        </span>'';"
                        <Badge className="{getStatusColor(service.status)}">'';"
                          <div className = "flex items-center gap-1"> {getStatusIcon(service.status)}
                            {service.status};
                        </Badge>;
                      </td>;
                    </motion.tr>;"
        transition="{{" delay: 0.2 }}&apos;&apos,';"
        className="&apos;mb-8" &apos;>&apos,'
        <Card>&apos;&apos,&apos;&apos,
          <CardHeader>&apos;&apos,&apos;&apos,"
            <CardTitle className="&apos;flex" items-center gap-2&apos;>'&apos;&apos,&apos;&apos;"
              <BarChart3 className="&apos;w-5" h-5 text-zion-cyan&apos; />
              Service Performance Overview&apos;
            </CardTitle>"
            <div className="&apos;overflow-x-auto&apos;">'&apos;&apos,&apos;&apos;"
              <table className="&apos;w-full&apos;">'&apos;&apos,''
                <thead>&apos;&apos,&apos;&apos,"
                  <tr className="&apos;border-b" border-zion-slate-light/20&apos;>'&apos;&apos,&apos;&apos;"
                    <th className="&apos;text-left" py-3 px-4 font-semibold text-zion-slate-dark&apos;>'
                      Service&apos;&apos,&apos;&apos,
                    </th>&apos;&apos,&apos;&apos,'
                      Performance&apos;&apos,&apos;&apos,
                      Growth&apos;&apos,&apos;&apos,
                      Clients&apos;&apos,&apos;&apos,
                      Revenue&apos;&apos,&apos;&apos;
                      Status&apos;"
        transition="{{" delay: 0.2 }}'''';"
        className = "mb-8 ">'
        <Card>'''''
          <CardHeader>''''
            <CardTitle className="flex items-center gap-2">''''
              <BarChart3 className="w-5 h-5 text-zion-cyan" />
              Service Performance Overview"
            <div className="overflow-x-auto">''''
              <table className="w-full">'''''
                <thead>''''
                  <tr className="border-b border-zion-slate-light/20">''''
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">'
                      Service'''''
                    </th>'''''
                      Performance'''''
                      Growth'''''
                      Clients'''''
                      Revenue''''
                      Status,
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {servicePerformance.map((service, index) => (}";
                      animate="{{" opacity: 1, x: 0 }}&apos;&apos;"
                      transition="{{" delay: 0.1 * index }}&apos;&apos,';"
                      className="&apos;border-b" border-zion-slate-light/10 hover: bg-zion-blue-light/5&apos,&apos,&apos;>'&apos;&apos,&apos;&apos;"
                      <td className="&apos;py-3" px-4&apos;>'&apos;&apos,&apos;&apos,",
                        <div className = "&apos,font-medium" text-zion-blue-dark&apos,>;
                          {service.name}&apos,
                        </div>&apos;&apos,&apos;&apos,
                      </td>&apos;&apos,&apos;&apos,"
                        <div className="&apos;flex" items-center gap-2&apos;>'&apos;&apos,&apos;&apos;"
                          <div className="&apos;w-16" bg-zion-slate-light/20 rounded-full h-2&apos;>'&apos;&apos,'
                            <div&apos;&apos;`;"
                              className="&apos;bg-gradient-to-r" from-zion-cyan to-zion-purple h-2 rounded-full&apos;``
                            >&apos;&apos;</div>&apos;&apos,&apos;&apos;"
                          <span className="&apos;text-sm" font-medium&apos;>
                            {service.performance}%&apos;"
                        <div className="&apos;flex" items-center gap-1&apos;>'&apos;&apos,&apos;&apos;"
                          <TrendingUp className="&apos;w-4" h-4 text-green-500&apos; />&apos;&apos,&apos;&apos,"
                          <span className="&apos;text-green-600" font-medium&apos;>
                            +{service.growth}%&apos;"
                        <span className="&apos;font-medium&apos;">{service.clients}&apos;</span>&apos;&apos,&apos;&apos;"
                        <span className="&apos;font-medium&apos;">
                          ${(service.revenue / 1000).toFixed(0)}K&apos,
                        </span>&apos;&apos,&apos;&apos;"
                      <td className="&apos;py-3" px-4&apos;>'&apos;&apos,'
                        <Badge className="{getStatusColor(service.status)}">&apos;&apos,&apos;&apos,"
                          <div className="&apos;flex" items-center gap-1&apos;>"
                      animate = "{{" opacity: 1, x: 0 }}''',
                      transition="{{" delay: 0.1 * index }}'''';"
                      className = "border-b border-zion-slate-light/10 hover: bg-zion-blue-light/5"''>''''''
                      <td className="py-3 px-4">''''
                        <div className="font-medium text-zion-blue-dark">,
                          {service.name}'
                      </td>''''
                        <div className="flex items-center gap-2">''''
                          <div className="w-16 bg-zion-slate-light/20 rounded-full h-2">'''';
                            <div''`
                            ></div>''''
                          <span className = "text-sm font-medium">
                            {service.performance}%"
                        <div className="flex items-center gap-1">''''
                          <TrendingUp className="w-4 h-4 text-green-500" />''''
                          <span className="text-green-600 font-medium">
                            +{service.growth}%"
                        <span className="font-medium">{service.clients}</span>''''
                        <span className="font-medium">
                          ${(service.revenue / 1000).toFixed(0)}K'
                        </span>''''
                        <Badge className="{getStatusColor(service.status)}">''''
                          <div className="flex items-center gap-1">
                            {getStatusIcon(service.status)};
                            {service.status}&apos;
                        </Badge>
                      </td>
                    </motion.tr>
                </tbody>;
              </table>;
      </motion.div> {/*   */}"
        transition="{{" delay: 0.3 }}'';"
        className = "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 ">{/*   */}";
              <PieChart className="w-5 h-5 text-zion-purple" />;
              Service Category Distribution;"
            <div className="space-y-3"> {categoryDistribution.map((category, index) => (;"
                  className="flex items-center justify-between">'';"
                  <div className="flex items-center gap-3">`;
                    <div``;"
                      className="{`w-4" h-4 bg-gradient-to-r ${category.color} rounded-full`}''></div>'';"
                    <span className = "font-medium text-zion-slate-dark"> {category.label}";
                    <div className="w-20 bg-zion-slate-light/20 rounded-full h-2">`;"
                        className="{`bg-gradient-to-r" ${category.color} h-2 rounded-full`}``;"
                        style = "{{" width: `${category.value}%` }}";
                    <span className="text-sm font-medium text-zion-slate-light"> {category.value}%;"
        transition="{{" delay: 0.3 }}&apos;&apos,';"
        className="&apos;grid" grid-cols-1 lg: grid-cols-2 gap-6 mb-8 &apos,>{/*   */}&apos;&apos;"
              <PieChart className="&apos;w-5" h-5 text-zion-purple&apos; />
              Service Category Distribution&apos;"
            <div className="&apos;space-y-3&apos;">
              {categoryDistribution.map((category, index) => (&apos}"
                  className="&apos;flex" items-center justify-between&apos;&apos,&apos;>'&apos;&apos,&apos;&apos;"
                  <div className="&apos;flex" items-center gap-3&apos;>`&apos;"
                      className="{`w-4" h-4 bg-gradient-to-r ${category.color} rounded-full`}&apos;&apos,>&apos;&apos;</div>&apos;&apos,&apos;&apos,"
                    <span className="&apos;font-medium" text-zion-slate-dark&apos;>
                      {category.label}&apos;"
                    <div className="&apos;w-20" bg-zion-slate-light/20 rounded-full h-2&apos;>`&apos,
                      ></div>&apos;&apos,&apos;&apos;"
                    <span className="&apos;text-sm" font-medium text-zion-slate-light&apos;>
                      {category.value}%&apos;"
        transition="{{" delay: 0.3 }}'''';"
        className = "grid grid-cols-1 lg: grid-cols-2 gap-6 mb-8 ">{/*   */}"
              <PieChart className="w-5 h-5 text-zion-purple" />
              Service Category Distribution"
            <div className="space-y-3">
              {categoryDistribution.map((category, index) => ("
                  className="flex items-center justify-between"''>'''''
                  <div className="flex items-center gap-3">`"
                      className="{`w-4" h-4 bg-gradient-to-r ${category.color} rounded-full`}'''></div>'''''
                    <span className="font-medium text-zion-slate-dark">
                      {category.label}"
                    <div className="w-20 bg-zion-slate-light/20 rounded-full h-2">`"
                    <span className="text-sm font-medium text-zion-slate-light">
                      {category.value}%
        </Card> {/*   */}";
              <Brain className="w-5 h-5 text-zion-cyan" />;
              Key Insights;"
            <div className="space-y-4">'';"
              <div className="flex items-start gap-3 p-3 bg-zion-green/10 rounded-lg">'';"
                <TrendingUp className="w-5 h-5 text-zion-green mt-1" />'';"
                  <h4 className = "font - semibold text-zion-slate-dark">,
                    AI Services Growth'',
                  </h4>'';"
                  <p className="text-sm text-zion-slate-light">;
                    AI and ML services showing 35% growth, highest performing;
                    category;"
              <div className="flex items-start gap-3 p-3 bg-zion-blue/10 rounded-lg">'';"
                <Users className="w - 5 h-5 text-zion-blue mt-1" />'',
                    Client Acquisition';
                    New client acquisition rate increased by 18% this quarter;"
              <div className="flex items-start gap-3 p-3 bg-zion-purple/10 rounded-lg">'';"
                <Star className="w - 5 h-5 text-zion-purple mt-1" />'',
                    Satisfaction Score';
                    Client satisfaction reached 4.8/5, highest in comp history;
      </motion.div> {/*   */}"
        transition="{{" delay: 0.4 }}'';"
        className="text-center">'';"'
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">'';"
          <h3 className="text-3xl font-bold mb-4">Get Detailed Analytics</h3>'';"
          <p className="text-xl mb-6 max-w-2xl mx-auto">;
            Access comprehensive analytics, custom reports, and real-time;
            insights to optimize your business performance and make data - driven,
            decisions.'',
          </p>'';"
          <div className="flex flex-col sm: flex-row gap-4 justify-center">'',
            <Button'';"
              className="bg-white text-zion-purple hover:bg-zion-slate-light","'>
              onClick = "{()" =>','
                window.open(',";
                  'mailto:kleber@ziontechgroup.com?subject="Analytics" Dashboard Access',_blank')}''>'';"
              <Rocket className="w-5 h-5 mr-2" />;
              Request Access,
            </Button>''
              variant='outline''';"
              className = "border-white text-white hover: bg-white hover:text-zion-purple",";
              onClick="{()" => window.open('tel:+13024640950',_blank')}''>'';"
              <Shield className="w-5 h-5 mr-2" />;
              Schedule Demo;"
              <Brain className="&apos;w-5" h-5 text-zion-cyan&apos; />
              Key Insights&apos;"
            <div className="&apos;space-y-4&apos;">'&apos;&apos,&apos;&apos;"
              <div className="&apos;flex" items-start gap-3 p-3 bg-zion-green/10 rounded-lg&apos;>'&apos;&apos,&apos;&apos;"
                <TrendingUp className="&apos;w-5" h-5 text-zion-green mt-1&apos; />&apos;&apos,&apos;&apos;"
                  <h4 className="&apos;font-semibold" text-zion-slate-dark&apos;>'
                    AI Services Growth&apos;&apos,&apos;&apos,
                  </h4>&apos;&apos,&apos;&apos,"
                  <p className="&apos;text-sm" text-zion-slate-light&apos;>"
              <Brain className = "w-5 h-5 text-zion-cyan" />
              Key Insights"
            <div className="space-y-4">''''
              <div className="flex items-start gap-3 p-3 bg-zion-green/10 rounded-lg">''''
                <TrendingUp className="w-5 h-5 text-zion-green mt-1" />''''
                  <h4 className="font-semibold text-zion-slate-dark">'
                    AI Services Growth'''''
                  </h4>''''
                  <p className="text-sm text-zion-slate-light">
                    AI and ML services showing 35% growth, highest performing,
category,;
category&apos;"
              <div className="&apos;flex" items-start gap-3 p-3 bg-zion-blue/10 rounded-lg&apos;>'&apos;&apos,&apos;&apos;"
                <Users className="&apos;w-5" h-5 text-zion-blue mt-1&apos; />&apos;&apos,&apos;&apos,
                    Client Acquisition&apos;&apos,&apos;&apos;
                    New client acquisition rate increased by 18% this quarter&apos;"
              <div className="&apos;flex" items-start gap-3 p-3 bg-zion-purple/10 rounded-lg&apos;>'&apos;&apos,&apos;&apos;"
                <Star className="&apos;w-5" h-5 text-zion-purple mt-1&apos; />&apos;&apos,&apos;&apos,
                    Satisfaction Score&apos;&apos,&apos;&apos;
                    Client satisfaction reached 4.8/5, highest in comp history&apos;"
              <div className = "flex items-start gap-3 p-3 bg-zion-blue/10 rounded-lg">''''
                <Users className="w-5 h-5 text-zion-blue mt-1" />'''''
                    Client Acquisition''''
                    New client acquisition rate increased by 18% this quarter"
              <div className="flex items-start gap-3 p-3 bg-zion-purple/10 rounded-lg">''''
                <Star className="w-5 h-5 text-zion-purple mt-1" />'''''
                    Satisfaction Score''''
                    Client satisfaction reached 4.8/5, highest in comp history,
      {/*   */}";
        transition="{{" delay: 0.4 }}&apos;&apos,'
        className="&apos;text-center&apos;&apos,&apos;">'&apos;&apos,&apos;&apos;"
        <div className="&apos;bg-gradient-to-r" from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white&apos;>'&apos;&apos,&apos;&apos;"
          <h3 className="&apos;text-3xl" font-bold mb-4&apos;>Get Detailed Analytics&apos;</h3>&apos;&apos,&apos;&apos,"
          <p className="&apos;text-xl" mb-6 max-w-2xl mx-auto&apos;>'
            decisions.&apos;&apos,&apos;&apos,
          </p>&apos;&apos,&apos;&apos,"
          <div className="&apos;flex" flex-col sm: flex-row gap-4 justify-center&apos;>'&apos,&apos,''
            <Button&apos;&apos,';"
              className="&apos;bg-white" text-zion-purple hover: bg-zion-slate-light&apos,&apos,>
                window.open(&apos,"
                  &apos,mailt,o: kleber@ziontechgroup.com?subject="Analytics" Dashboard Access&apos,_blank&apos)}&apos;&apos,>&apos;&apos,&apos;&apos,"
              <Rocket className="&apos;w-5" h-5 mr-2&apos; />
              Request Access&apos,
            </Button>&apos;&apos,&apos;&apos,
              variant=&apos;outline&apos;&apos,&apos;"
              className="&apos;border-white" text-white hover: bg-white hover:text-zion-purple&apos,&apos,"
              onClick="{()" => window.open(&apos,te,l: +13024640950&apos,_blank&apos)}&apos;&apos,>&apos;&apos,&apos;&apos,"
              <Shield className="&apos;w-5" h-5 mr-2&apos; />
              Schedule Demo&apos;"
        transition="{{" delay: 0.4 }}'''';"
        className = "text-center"''>''''''
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">''''
          <h3 className="text-3xl font-bold mb-4">Get Detailed Analytics</h3>''''
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            insights to optimize your business performance and make data-driven,'
decisions.'''''
          </p>''''
          <div className="flex flex-col sm: flex-row gap-4 justify-center">'''',
            <Button'''',">
              className = "bg-white text-zion-purple hover: bg-zion-slate-light"',"'
              onClick="{()" =>',''
                window.open(''
                  'mailto: kleber@ziontechgroup.com?subject="Analytics" Dashboard Access', _blank')}'''>''''
              <Rocket className="w-5 h-5 mr-2" />
              Request Access'
            </Button>'''';
              variant='outline''''';"
              className = "border-white text-white hover: bg-white hover:text-zion-purple"',"'
              onClick="{()" => window.open('tel: +13024640950', _blank')}'''>''''
              <Shield className="w-5 h-5 mr-2" />
              Schedule Demo,
    </div>)};
export default AdvancedAnalyticsDashboard;
export { AdvancedAnalyticsDashboard }
;

'
import React { useState }  from 'react,"
"