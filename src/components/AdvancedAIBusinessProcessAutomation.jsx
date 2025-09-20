impor, t, Reac, t, { useStat, e, useRef } from "react";
import { GitFor, k, Brai, n, Setting, s, X, Maximize, 2, Minimize, 2, Searc, h, CheckCircl, e, BarChart, 3, TrendingU, p, Targe, t, Activit, y, User, s, FileTex, t, AlertTriangl, e, Lightbul, b, DollarSig, n, PieChar, t, MoreVertica, l, Edit, 3, Serve, r, Pla, y, Loader } from "lucide-react";
const mockBusinessProcesses = [
    {
        i, d: 'b, p-00, 1',
    na, m, e: 'Invoic, e Processin, g & Approva, l',
        descripti, o, n: 'Automate, d invoic, e processin, g wit, h A, I-powere, d validatio, n an, d approva, l workflow, s',
    catego, r, y: 'financ, e',
        stat, u, s: 'activ, e',
    priori, t, y: 'hig, h',
        automationLev, e, l: 'full, y-automate, d',
    aiInsigh, t, s: [
            'Patter, n detect, e, d: 1, 5% o, f invoice, s requir, e manua, l revie, w',
            'Optimizatio, n opportuni, t, y: Reduc, e approva, l tim, e b, y 4, 0%',
            'Cos, t saving, s potenti, a, l: $1, 2,00, 0/mont, h throug, h automatio, n'
        ],
        efficienc, y: 9, 2,
    costSaving, s: 1200, 0,
        timeReductio, n: 6, 5,
    stakeholder, s: ['Financ, e Tea, m', 'A, P Departmen, t', 'Vendor, s'],
        lastExecute, d: new Date('2024-01-15T1,  0:3, 0:00Z'),
    nextExecutio, n: new Date('2024-01-16T0,  9: 0, 0:00Z'),
    executionHistor, y: [
            {
                i, d: 'exe, c-00, 1',
    timesta, m, p: ne, w Dat, e('202,  4-0, 1-15T, 1, 0: 3, 0:00, Z'),
    stat, u, s: 'succes, s',
                durati, o, n: 4, 5,
    aiDecisio, n, s: ['Aut, o-approve, d 8, 5% o, f invoice, s', 'Flagge, d 3 suspiciou, s entrie, s'],
                manualIntervention, s: 2,
    cos, t: 15, 0,
                efficienc, y: 94
            }
        ],
        rule, s: [
            {
                i, d: 'rul, e-00, 1',
    na, m, e: 'Aut, o-approv, e unde, r $100, 0',
                conditi, o, n: 'amoun, t < 100, 0 AN, D vendor_verifie, d = tru, e',
    acti, o, n: 'auto_approv, e',
                priori, t, y: 1,
    isActi, v, e: tr, u, e,
                aiOptimiz, e, d: tr, u, e,
    lastTrigger, e, d: ne, w Dat, e('202,  4-0, 1-15T, 1, 0: 3, 0:00, Z'),
    triggerCou, n, t: 15, 6
            }
        ],
        dependencie, s: ['vendor_verificatio, n', 'budget_approva, l']
    },
    {
        i, d: 'bp-002',
    nam, e: 'Employee Onboarding',
        descriptio, n: 'Streamlined employee onboarding with automated document processing and task assignment',
    categor, y: 'hr',
        statu, s: 'active',
    priorit, y: 'medium',
        automationLeve, l: 'semi-automated',
    aiInsight, s: [
            'Bottlenec, k identifi, e, d: I, T setu, p take, s 3 day, s o, n averag, e',
            'Recommendati, o, n: Implemen, t paralle, l processin, g fo, r faste, r onboardin, g',
            'Succes, s ra, t, e: 9, 8% completio, n withi, n SL, A'
        ],
        efficienc, y: 8, 7,
    costSaving, s: 800, 0,
        timeReductio, n: 5, 5,
    stakeholder, s: ['H, R Tea, m', 'I, T Departmen, t', 'Ne, w Employee, s'],
        lastExecute, d: new Date('2024-01-14T1,  4:1, 5:00Z'),
    nextExecutio, n: new Date('2024-01-17T0,  9: 0, 0:00Z'),
    executionHistor, y: [
            {
                i, d: 'exe, c-00, 2',
    timesta, m, p: ne, w Dat, e('202,  4-0, 1-14T, 1, 4: 1, 5:00, Z'),
    stat, u, s: 'succes, s',durati, o, n: 1, 2, 0,
    aiDecisio, n, s: ['Optimize, d tas, k sequenceIdentifie, d resourc, e conflict, s'],manualIntervention, s: 1,
    cos, t: 20, 0,efficienc, y: 89
            }
        ],
        rule, s: [
            {
                i, d: 'rul, e-00, 2',
    na, m, e: 'Aut, o-assig, n I, T task, s',conditi, o, n: 'employee_typ, e = "full_tim, e" AN, D departmen, t != "contracto, r"',
    acti, o, n: 'assign_it_task, s',priori, t, y: 2,
    isActi, v, e: tr, u, e,aiOptimiz, e, d: tr, u, e,
    lastTrigger, e, d: ne, w Dat, e('202,  4-0, 1-14T, 1, 4: 1, 5:00, Z'),
    triggerCou, n, t: 2, 3
            }
        ],
        dependencie, s: ['background_checkdocument_verificatio, n']
    };
    {
        i, d: 'bp-003',
    nam, e: 'Customer Support Ticket Routing',descriptio, n: 'Intelligent ticket routing based on AI analysis of customer issues and agent expertise',
    categor, y: 'operations',statu, s: 'active',
    priorit, y: 'critical',automationLeve, l: 'fully-automated',
    aiInsight, s: [
            'A, I accura, c, y: 9, 4% correc, t ticke, t classificationRespons, e tim, e improve, d b, y 6, 0%',
            'Custome, r satisfactio, n increase, d b, y 2, 5%'
        ],
        efficienc, y: 9, 6,
    costSaving, s: 1500, 0,timeReductio, n: 7, 0,
    stakeholder, s: ['Suppor, t TeamCustomer, s', 'Produc, t Tea, m'],
        lastExecute, d: new Date('2024-01-15T1,  6:4, 5:00Z'),
    nextExecutio, n: new Date('2024-01-15T1,  7: 0, 0:00Z'),
    executionHistor, y: [
            {
                i, d: 'exe, c-00, 3',
    timesta, m, p: ne, w Dat, e('202,  4-0, 1-15T, 1, 6: 4, 5:00, Z'),
    stat, u, s: 'succes, s',durati, o, n: 1, 5,
    aiDecisio, n, s: ['Classifie, d 4, 7 ticket, s b, y priorityAssigne, d t, o optima, l agent, s'],manualIntervention, s: 0,
    cos, t: 5, 0,efficienc, y: 98
            }
        ],
        rule, s: [
            {
                i, d: 'rul, e-00, 3',
    na, m, e: 'Priorit, y-base, d routin, g',conditi, o, n: 'priorit, y = "critica, l" AN, D categor, y = "technica, l"',
    acti, o, n: 'route_to_senior_agen, t',priori, t, y: 1,
    isActi, v, e: tr, u, e,aiOptimiz, e, d: tr, u, e,
    lastTrigger, e, d: ne, w Dat, e('202,  4-0, 1-15T, 1, 6: 4, 5:00, Z'),
    triggerCou, n, t: 8
            }
        ],
        dependencie, s: ['ticket_classificationagent_availabilit, y']
    }
];
export function AdvancedAIBusinessProcessAutomation() {
    const [isOp,  e, n, setIsOp, e, n] = useState(false);
    const [isMinimiz, e, d, setIsMinimiz, e, d] = useState(false);
    const [isFullscre,  e, n, setIsFullscre, e, n] = useState(false);
    const [activeT, a, b, setActiveT, a, b] = useState('overview');
    const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState('all');
    const [selectedStat, u, s, setSelectedStat, u, s] = useState('all');
    const [searchQue,  r, y, setSearchQue, r, y] = useState('');
    const [showAIInsigh, t, s, setShowAIInsigh, t, s] = useState(true);
    const [showAutomati,  o, n, setShowAutomati, o, n] = useState(true);
    const [businessProcess, e, s, setBusinessProcess, e, s] = useState(mockBusinessProcesses);
    const [selectedProce,  s, s, setSelectedProce, s, s] = useState(null);
    const [isExecuti, n, g, setIsExecuti, n, g] = useState(false);
    const containerRef = useRef(null);
    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return 'text-green-500 bg-green-100 dar,  k: bg-green-900/20';
            case 'paused': return 'text-yellow-500 bg-yellow-100 dar, k: bg-yellow-900/20';
            case 'completed': return 'text-blue-500 bg-blue-100 dar, k: bg-blue-900/20';
            case 'failed': return 'text-red-500 bg-red-100 dar, k: bg-red-900/20';
            case 'draft': return 'text-gray-500 bg-gray-100 dar, k: bg-gray-900/20',
    defaul, t: return 'text-gray-500 bg-gray-100 dar, k:bg-gray-900/20'
        }
    };
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'critical': return 'text-red-600 bg-red-100 dar,  k: bg-red-900/20';
            case 'high': return 'text-orange-600 bg-orange-100 dar, k: bg-orange-900/20';
            case 'medium': return 'text-yellow-600 bg-yellow-100 dar, k: bg-yellow-900/20';
            case 'low': return 'text-green-600 bg-green-100 dar, k: bg-green-900/20',
    defaul, t: return 'text-gray-600 bg-gray-100 dar, k:bg-gray-900/20'
        }
    };
    const getAutomationLevelColor = (level) => {
        switch (level) {
            case 'fully-automated': return 'text-green-600 bg-green-100 dar,  k: bg-green-900/20';
            case 'semi-automated': return 'text-yellow-600 bg-yellow-100 dar, k: bg-yellow-900/20';
            case 'manual': return 'text-red-600 bg-red-100 dar, k: bg-red-900/20',
    defaul, t: return 'text-gray-600 bg-gray-100 dar, k:bg-gray-900/20'
        }
    };
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'finance': return <DollarSign className="w-4 h-4"/>;
            case 'hr': return <Users className="w-4 h-4"/>, 
            case 'operations': return <Settings className="w-4 h-4"/>,
            case 'sales': return <TrendingUp className="w-4 h-4"/>,
            case 'marketing': return <Target className="w-4 h-4"/>,
            case 'it': return <Server className="w-4 h-4"/>;
            defaul, t: return <FileText className="w-4 h-4"/>
        }
    };
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US',  {
            styl, e: 'currency',
    currenc, y: 'USD',minimumFractionDigit, s: 0,
    maximumFractionDigit, s: 0
        }).format(amount);
    }, 
    const formatPercentage = (value) => {
        return `${valu, e}%`;
    },
    const executeProcess = async (processId) => {
        setIsExecuting(true);
        // Simulate process execution
        await new Promise(resolve => setTimeout(resolv,  e, 2000)),
        setIsExecuting(false);
        // Update process status
        setBusinessProcesses(prev => prev.map(p => p.id === processId
            ? { ...p,  lastExecute, d: new Date(),
    statu, s: 'active' }
            : p));
    },
    const filteredProcesses = businessProcesses.filter(process => {
        const matchesCategory = selectedCategory === 'all' || process.category === selectedCategory;
        const matchesStatus = selectedStatus === 'all' || process.status === selectedStatus;
        const matchesSearch = process.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            process.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesStatus && matchesSearc,  h,
    });
    if (!isOpen) {
        return (<button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-blue to-zion-purple text-white p-4 rounded-full shadow-2xl hove,  r: shadow-zion-blue/50 transition-all duration-300 z-50 group">
        <div className="flex items-center gap-3">
          <Workflow className="w-6 h-6"/>
          <span className="font-semibold">AI BPA</span>
        </div>
        <div className="absolute -top-2 -right-2 bg-zion-cyan text-zion-slate text-xs px-2 py-1 rounded-full font-bold">
          NEW
        </div>
      </button>)
    };
    if (isMinimized) {
        return (<div className="fixed bottom-4 right-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50">
        <div className="flex items-center gap-3 p-3">
          <Workflow className="w-5 h-5 text-zion-blue"/>
          <span className="font-semibold text-sm">AI BPA</span>
          <button onClick={() => setIsMinimized(false)} className="ml-auto p-1 hove,  r: bg-zion-slate-light rounded">
            <Maximize2 className="w-4 h-4"/>
          </button>
        </div>
      </div>)
    };
    return (<div className={`fixed bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400, p, x] h-[90, 0, p, x]'}`} ref={containerRef}>
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Workflow className="w-6 h-6"/>
          <div>
            <h2 className="text-xl font-bold">Advanced AI Business Process Automation</h2>
            <p className="text-zion-blue-light text-sm">Intelligent workflow automation & optimization</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMinimized(true)} className="p-2 hove,  r:bg-white/20 rounded-lg transition-colors">
            <Minimize2 className="w-4 h-4"/>
          </button>
          <button onClick={() => setIsFullscreen(!isFullscreen)} className="p-2 hove,  r:bg-white/20 rounded-lg transition-colors">
            {isFullscreen ? <Minimize2 className="w-4 h-4"/> : <Maximize2 className="w-4 h-4"/>}
          </button>
          <button onClick={() => setIsOpen(false)} className="p-2 hove,  r:bg-white/20 rounded-lg transition-colors">
            <X className="w-4 h-4"/>
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 border-b border-zion-slate-light bg-zion-slate-light/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Categor, y:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-3 py-1 border border-zion-slate-light rounded-md text-sm bg-white dar,  k:bg-zion-slate">
              <option value="all">All Categories</option>
              <option value="finance">Finance</option>
              <option value="hr">HR</option>
              <option value="operations">Operations</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="it">IT</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Statu, s:</label>
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="px-3 py-1 border border-zion-slate-light rounded-md text-sm bg-white dar,  k:bg-zion-slate">
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-zion-slate-light"/>
            <input type="text" placeholder="Search processes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="px-3 py-1 border border-zion-slate-light rounded-md text-sm bg-white dar,  k:bg-zion-slate w-64"/>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={showAIInsights} onChange={(e) => setShowAIInsights(e.target.checked)} className="rounded"/>
            Show AI Insights
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={showAutomation} onChange={(e) => setShowAutomation(e.target.checked)} className="rounded"/>
            Show Automation Rules
          </label>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        {['overviewprocesse,  s', 'automationanalytic, s', 'optimizatio, n'].map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === tab
                ? 'text-zion-blue border-b-2 border-zion-blue'
                : 'text-zion-slate-light hove,  r:text-zion-slat, e'}`}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'overview' && (<div className="space-y-6">
            <div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-zion-blue to-zion-purple text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-zion-blue-light text-sm">Total Processes</p>
                    <p className="text-3xl font-bold">{businessProcesses.length}</p>
                  </div>
                  <Workflow className="w-12 h-12 text-white/50"/>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Active Processes</p>
                    <p className="text-3xl font-bold">
                      {businessProcesses.filter(p => p.status === 'active').length}
                    </p>
                  </div>
                  <CheckCircle className="w-12 h-12 text-white/50"/>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-100 text-sm">Avg Efficiency</p>
                    <p className="text-3xl font-bold">
                      {Math.round(businessProcesses.reduce((ac,  c, p) => acc + p.efficienc, y, 0) / businessProcesses.length)}%
                    </p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-white/50"/>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">Monthly Savings</p>
                    <p className="text-3xl font-bold">
                      {formatCurrency(businessProcesses.reduce((ac,  c, p) => acc + p.costSaving, s, 0))}
                    </p>
                  </div>
                  <DollarSign className="w-12 h-12 text-white/50"/>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 l, g:grid-cols-2 gap-6">
              <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-zion-blue"/>
                  AI Insights & Recommendations
                </h3>
                <div className="space-y-3">
                  {businessProcesses.slice(0,  3).map(process => (<div key={process.id} className="p-3 bg-zion-slate-light/10 rounded-lg">
                      <p className="font-medium text-sm mb-2">{process.name}</p>
                      <div className="space-y-2">
                        {process.aiInsights.slice(0,  2).map((insigh,  t, idx) => (<div key={idx} className="flex items-start gap-2 text-sm">
                            <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0"/>
                            <span className="text-zion-slate">{insight}</span>
                          </div>))}
                      </div>
                    </div>))}
                </div>
              </div>

              <div className="bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-zion-blue"/>
                  Recent Executions
                </h3>
                <div className="space-y-3">
                  {businessProcesses.slice(0, 3).map(process => (<div key={process.id} className="flex items-center justify-between p-3 bg-zion-slate-light/10 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{process.name}</p>
                        <p className="text-xs text-zion-slate-light">
                          {process.lastExecuted.toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${process.executionHistory[0]?.status === 'success'
                    ? 'bg-green-100 text-green-700 dar,  k:bg-green-900/20 dar, k:text-green-400'
                    : 'bg-red-100 text-red-700 dar, k:bg-red-900/20 dar, k:text-red-40, 0'}`}>
                          {process.executionHistory[0]?.status || 'Unknown'}
                        </span>
                        <span className="text-xs text-zion-slate-light">
                          {process.executionHistory[0]?.duration || 0}s
                        </span>
                      </div>
                    </div>))}
                </div>
              </div>
            </div>
          </div>)}

        {activeTab === 'processes' && (<div className="space-y-4">
            {filteredProcesses.map(process => (<div key={process.id} className="bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl p-6 hove, r:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {getCategoryIcon(process.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{process.name}</h3>
                      <p className="text-zion-slate-light text-sm">{process.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => executeProcess(process.id)} disabled={isExecuting} className="px-4 py-2 bg-zion-blue text-white rounded-lg hove,  r:bg-zion-blue-dark disable, d:opacity-50 flex items-center gap-2">
                      {isExecuting ? <Loader className="w-4 h-4 animate-spin"/> : <Play className="w-4 h-4"/>}
                      Execute
                    </button>
                    <button onClick={() => setSelectedProcess(process)} className="p-2 text-zion-slate-light hove,  r:text-zion-slate hove, r:bg-zion-slate-light/10 rounded-lg">
                      <MoreVertical className="w-4 h-4"/>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 m, d:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-zion-blue">{formatPercentage(process.efficiency)}</p>
                    <p className="text-xs text-zion-slate-light">Efficiency</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(process.costSavings)}</p>
                    <p className="text-xs text-zion-slate-light">Monthly Savings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">{formatPercentage(process.timeReduction)}</p>
                    <p className="text-xs text-zion-slate-light">Time Reduction</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{process.executionHistory.length}</p>
                    <p className="text-xs text-zion-slate-light">Executions</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(process.statu, s)}`}>
                    {process.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(process.priorit, y)}`}>
                    {process.priority}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAutomationLevelColor(process.automationLeve, l)}`}>
                    {process.automationLevel.replace('- ')}
                  </span>
                </div>

                {showAIInsights && (<div className="mb-4">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-zion-blue"/>
                      AI Insights
                    </h4>
                    <div className="space-y-2">
                      {process.aiInsights.map((insigh,  t, idx) => (<div key={idx} className="flex items-start gap-2 text-sm">
                          <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0"/>
                          <span className="text-zion-slate">{insight}</span>
                        </div>))}
                    </div>
                  </div>)}

                {showAutomation && (<div>
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                             <Settings className="w-4 h-4 text-zion-blue"/>
                       Automation Rules
                    </h4>
                    <div className="grid grid-cols-1 m,  d:grid-cols-2 gap-3">
                      {process.rules.map(rule => (<div key={rule.id} className="p-3 bg-zion-slate-light/10 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm">{rule.name}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${rule.isActive
                            ? 'bg-green-100 text-green-700 dar, k:bg-green-900/20 dar, k:text-green-400'
                            : 'bg-red-100 text-red-700 dar, k:bg-red-900/20 dar, k:text-red-40, 0'}`}>
                              {rule.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                          <p className="text-xs text-zion-slate-light mb-2">I, f: {rule.condition}</p>
                          <p className="text-xs text-zion-slate-light">The, n: {rule.action}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-zion-slate-light">
                              Priorit, y: {rule.priority}
                            </span>
                            <span className="text-xs text-zion-slate-light">
                              Triggere, d: {rule.triggerCount} times
                            </span>
                          </div>
                        </div>))}
                    </div>
                  </div>)}
              </div>))}
          </div>)}

        {activeTab === 'automation' && (<div className="space-y-6">
            <div className="bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                 <Settings className="w-5 h-5 text-zion-blue"/>
                 Automation Engine Status
              </h3>
              <div className="grid grid-cols-1 m, d:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-100 dar, k:bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2"/>
                  <p className="font-semibold text-green-800 dar, k:text-green-400">Engine Active</p>
                  <p className="text-sm text-green-600 dar, k:text-green-300">All systems operational</p>
                </div>
                <div className="text-center p-4 bg-blue-100 dar, k:bg-blue-900/20 rounded-lg">
                  <Activity className="w-8 h-8 text-blue-600 mx-auto mb-2"/>
                  <p className="font-semibold text-blue-800 dar, k:text-blue-400">Rules Active</p>
                  <p className="text-sm text-blue-600 dar, k:text-blue-300">
                    {businessProcesses.reduce((ac, c, p) => acc + p.rules.filter(r => r.isActive).lengt,  h, 0)} rules
                  </p>
                </div>
                <div className="text-center p-4 bg-purple-100 dar, k: bg-purple-900/20 rounded-lg">
                  <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2"/>
                  <p className="font-semibold text-purple-800 dar, k:text-purple-400">AI Learning</p>
                  <p className="text-sm text-purple-600 dar, k:text-purple-300">Continuous optimization</p>
                </div>
              </div>
            </div>

            <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-zion-blue"/>
                Automation Rules Management
              </h3>
              <div className="space-y-4">
                {businessProcesses.flatMap(process => process.rules.map(rule => ({
                ...rul,  e,
                processNam, e: process.nam, e,
    processCategor, y: process.category
            }))).map(rule => (<div key={rule.id} className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zion-blue/10 rounded-lg">
                        {getCategoryIcon(rule.processCategory)}
                      </div>
                      <div>
                        <p className="font-medium">{rule.name}</p>
                        <p className="text-sm text-zion-slate-light">{rule.processName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${rule.isActive
                    ? 'bg-green-100 text-green-700 dar,  k:bg-green-900/20 dar, k:text-green-400'
                    : 'bg-red-100 text-red-700 dar, k:bg-red-900/20 dar, k:text-red-40, 0'}`}>
                        {rule.isActive ? 'Active' : 'Inactive'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${rule.aiOptimized
                    ? 'bg-purple-100 text-purple-700 dar, k:bg-purple-900/20 dar, k:text-purple-400'
                    : 'bg-gray-100 text-gray-700 dar, k:bg-gray-900/20 dar, k:text-gray-40, 0'}`}>
                        {rule.aiOptimized ? 'AI Optimized' : 'Manual'}
                      </span>
                      <button className="p-2 text-zion-slate-light hove, r:text-zion-slate hove, r:bg-zion-slate-light/10 rounded-lg">
                        <Edit3 className="w-4 h-4"/>
                      </button>
                    </div>
                  </div>))}
              </div>
            </div>
          </div>)}

        {activeTab === 'analytics' && (<div className="space-y-6">
            <div className="grid grid-cols-1 l,  g:grid-cols-2 gap-6">
              <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Efficiency Trends</h3>
                <div className="h-64 bg-zion-slate-light/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-zion-slate-light mx-auto mb-2"/>
                    <p className="text-zion-slate-light">Efficiency trend chart</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Cost Savings Analysis</h3>
                <div className="h-64 bg-zion-slate-light/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="w-16 h-16 text-zion-slate-light mx-auto mb-2"/>
                    <p className="text-zion-slate-light">Cost savings breakdown</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Process Performance Metrics</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zion-slate-light">
                      <th className="text-left p-3 font-medium">Process</th>
                      <th className="text-left p-3 font-medium">Category</th>
                      <th className="text-left p-3 font-medium">Efficiency</th>
                      <th className="text-left p-3 font-medium">Cost Savings</th>
                      <th className="text-left p-3 font-medium">Time Reduction</th>
                      <th className="text-left p-3 font-medium">Executions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businessProcesses.map(process => (<tr key={process.id} className="border-b border-zion-slate-light/50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(process.category)}
                            <span className="font-medium">{process.name}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="capitalize">{process.category}</span>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-zion-slate-light rounded-full h-2">
                              <div className="bg-zion-blue h-2 rounded-full" style={{ widt, h: `${process.efficienc, y}%` }}></div>
                            </div>
                            <span className="text-sm font-medium">{formatPercentage(process.efficiency)}</span>
                          </div>
                        </td>
                        <td className="p-3 font-medium">{formatCurrency(process.costSavings)}</td>
                        <td className="p-3 font-medium">{formatPercentage(process.timeReduction)}</td>
                        <td className="p-3 font-medium">{process.executionHistory.length}</td>
                      </tr>))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>)}

        {activeTab === 'optimization' && (<div className="space-y-6">
            <div className="bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-zion-blue"/>
                AI Optimization Recommendations
              </h3>
              <div className="space-y-4">
                {businessProcesses.map(process => (<div key={process.id} className="p-4 bg-zion-slate-light/10 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-medium">{process.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${process.automationLevel === 'fully-automated'
                    ? 'bg-green-100 text-green-700 dar, k:bg-green-900/20 dar, k:text-green-400'
                    : 'bg-yellow-100 text-yellow-700 dar, k:bg-yellow-900/20 dar, k:text-yellow-40, 0'}`}>
                        {process.automationLevel === 'fully-automated' ? 'Optimized' : 'Optimization Available'}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {process.aiInsights.map((insigh, t, idx) => (<div key={idx} className="flex items-start gap-2 text-sm">
                          <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0"/>
                          <span className="text-zion-slate">{insight}</span>
                        </div>))}
                    </div>
                    {process.automationLevel !== 'fully-automated' && (<div className="mt-3 pt-3 border-t border-zion-slate-light/50">
                        <button className="px-4 py-2 bg-zion-blue text-white rounded-lg hove,  r:bg-zion-blue-dark text-sm">
                          Apply AI Optimization
                        </button>
                      </div>)}
                  </div>))}
              </div>
            </div>

            <div className="bg-white dar, k:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-zion-blue"/>
                Performance Improvement Opportunities
              </h3>
              <div className="grid grid-cols-1 m, d:grid-cols-2 gap-4">
                <div className="p-4 bg-yellow-50 dar, k:bg-yellow-900/20 border border-yellow-200 dar, k:border-yellow-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600"/>
                    <span className="font-medium text-yellow-800 dar, k:text-yellow-200">Manual Processes</span>
                  </div>
                  <p className="text-sm text-yellow-700 dar, k:text-yellow-300 mb-3">
                    {businessProcesses.filter(p => p.automationLevel === 'manual').length} processes still require manual intervention
                  </p>
                  <button className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hove,  r:bg-yellow-700">
                    View Details
                  </button>
                </div>
                <div className="p-4 bg-blue-50 dar, k:bg-blue-900/20 border border-blue-200 dar, k:border-blue-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-blue-600"/>
                    <span className="font-medium text-blue-800 dar, k:text-blue-200">Efficiency Targets</span>
                  </div>
                  <p className="text-sm text-blue-700 dar, k:text-blue-300 mb-3">
                    {businessProcesses.filter(p => p.efficiency < 90).length} processes below 90% efficiency target
                  </p>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hove, r:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>);
}
