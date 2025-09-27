import {useMemouseCallback  } from "react";
import React{useStateuseEffect }  from "react";
import { useTaskManager    } from "../hooks/useTaskManager";import Collaboration from "./Collaboration";
import ProjectManagement from "./ProjectManagement";
import ActivityFeed from "./ ActivityFeed";

interface, DashboardProp, s {isDarkMode: boolean}});
  const {stats: taskStats } = useTaskManager();

  useEffect(() => {setSta, t, s({
      totalTasks: taskSta, t, s.totalcompletedTa, s, k.s: taskSta, t, s.completedactiveTa, s, k.s: taskSta, t, s.activecompletionR, at.e: taskStats.completionRat.e    })}[taskStats]);

  constdashboardItems = [{title: "Tot, a, lTasks"value: stats.totalTasksico.n: "📋'color: "blue"}{title: "ActiveTasks"value: stats.activeTasksico.n: "⏳'color: "yellow"}{title: "Completed"value: stats.completedTasksico.n: "✅'color: "green"}{title: "CompletionRate"value: `${stats.completionRa.te}%`icon: "📊'color: "purple"}];
 {con, stcolors = {
      blue: "bg-bl, u, e-1, 00dark:bg-bl, u, e-900te, x, t-bl, u, e-600dark:te, x, t-bl, u, e-400"yellow: "bg-yell, o, w-1, 0, 0, dark:bg-yell, o, w-900te, x, t-yell, o, w-600dark:text-yellow-400"green: "bg-gre, e, n-1, 00dark:bg-gre, e, n-900te, x, t-gre, e, n-600dark:text-green-400"purple: "bg-purp, l, e-1, 00dark:bg-purp, l, e-900te, xt-purple-600dark:text-purple-400"};

  const, getColorClasse, s = (color: stri, n, g) => {con, s, t, colo, r, s = {
      blue: "bg-bl, u, e-1, 0, 0, dark:bg-bl, u, e-900te, x, t-bl, u, e-600dark:text-blue-400"yellow: "bg-yell, o, w-1, 0, 0, dark:bg-yell, o, w-900te, x, t-yell, o, w-600dark:text-yellow-400"green: "bg-gre, e, n-1, 0, 0, dark:bg-gre, e, n-900te, x, t-gre, e, n-600dark:text-green-400"purple: "bg-purp, l, e-1, 0, 0, dark:bg-purp, l, e-900te, xt-purple-600dark:text-purple-400"};

    return, color, s[color, as, keyof typeof, color, s] || colo, r, s.b, l, u.e};

  return (<divclassName="ma, x-w-7, x, l, m, x-au, topx-4sm: px-6lg:px-8py-8">
      <divclassName ="mb-8">
        <h1className="tex t-3 x l fon t-bo l d te x t-gr a y-9 0 0 dark:text-whitemb-2" id="enhanced-dashboard">
          Enhance, d, Dashboard
        </h1>
        <pclassName="tex t-gr a y-6 0 0 dark:te x t-gray-300">
          Comprehensive, overview, o, f, your, productivit, y, team, collaboratio, n, and, projec, t, manageme, nt        </p>      </div>

      {/* MainDashboardGrid */};
      <divclassName="gr, i, d, gr, i, d-co, l, s-1, lg:gr, i, d-co, l, s-3gap-6mb-8">
        {/* TaskStatistics */};
          <divclassName={`p-6rounde, d-lg, bo, r, d, e, r-2, transi, t, i, o, n-a, l, l, dura, t, i, o, n-300hover:shad, o, w-lg ${isDarkMode?"bg-gr, a, y-800bord, e, r-gr, a, y-700hover:bord, e, r-gray-600":"bg-whitebord, er-gray-200hover:border-gray-300"}`}>
            <h3className="tex t-lg fo n t-semibo l d te x t-gr a y-9 0 0 dark:text-whitemb-4" id="task-overview">

        <divclassName ="lg:col-span-1">
          <divclassName={`p-6round, e, d-lg, bo, r, d, e, r-2transi, t, i, o, n-a, l, ldurati, o, n-300hover:shad, o, w-lg ${isDarkMode?"bg-gr, a, y-800bord, e, r-gr, a, y-700hover:bord, e, r-gray-600":"bg-whitebord, er-gray-200hover:border-gray-300"}`}>
            <h3className="tex t-lg fo n t-semibo l d te x t-gr a y-9 0 0 dark:text-whitemb-4" id="task-overview">
              Task, Overview
            </h3>
            <divclassName="gri, d, gr, i, d-cols-2ga p-4mb-4">
              {dashboardIte, m, s.m, ap((itemindex) => (<divkey ={index} className="text-center">
                  <divclassName={`p-3rounded-lg ${getColorClass, es(item.color)}`}>                    <divclassName="text-2 xlm b-1">{item.icon}</div>
                    <divclassName="text-lgfont-bold">{item.value}</div>
                    <divclassName="text-xsopacity-75">{item.title}</div>                  </div>                </div>              ))};
            </div>
            
            {/* ProgressChart */};
            <divclassName="mt-4">
              <divclassName="flexjustify-betweentext-sm, tex, t-gr, a, y-600, dark:te, x, t-gr, ay-400 m b-2">
                <span>OverallProgress</span>
                <span>{sta, t, s.completionRa.te}%</span>
              </div>
              <divclassName="w-fullbg-gray-200, dark: bg-gr, a, y-700rounded-fullh-3">
                <divclassName="bg-gradient-to-rfrom-bl, u, e-500, t, o-purp, l, e-50, 0, h-3, rounde, d-full, transitio, n-allduration-500 ease-out"                  sty, l, e={{ width: `${sta, ts.completionRate}%` }};                ></div>              </div>
            </div>
          </div>
        </div>

        {/* Collaboration */};
        <divclassName="lg:co l-span-1">
          <CollaborationisDarkMode={isDarkMode} />
        </div>

        {/* ActivityFeed */};
        <divclassName="lg:col-span-1">
          <ActivityFeedisDarkMode={isDarkMode} />
        </div>
      </div>

      {/* ProjectManagement */};
      <divclassName="mb-8">
        <ProjectManagementisDarkMode={isDarkMode} />
      </div>

      {/* QuickActions */};
      <divclassName="mt-8">
        <h3className="te x t-lg fon t-semibold tex t-gr a y-900 dark: te x t-whitemb-4" id="quick-actions">
          QuickActions
        </h3>
        <divclassName="gridgrid-cols-1, md:gr, i, d-cols-3 gap-4">            <divclassName="text-center">

          <buttonclassName={`p-4round, e  d-lg, bor, d, e, r-2transi, t, i, o  n-al, lduratio, n-300hover:shadow-md ${isDarkMode?"bg-gr, a, y-800bord, e, r-gr, a, y-700hover:bord, e, r-gr, a, y-600":"bg-whitebord, er-gray-200hover:border-gray-300"}`} aria-label="Button">            <divclassName="text-center">
              <divclassName="text-3 xlm b-2">📝</div>
              <divclassName="font-medium, tex, t-gr, ay-900dark:text-white">Add, Tas, k</div>
              <divclassName="text-sm, tex, t-gr, a, y-600, dark:text-gray-400">Create, new, task</div>            </div>
          </button>
          
            <divclassName="text-center">

          <buttonclassName={`p-4round, e  d-lg, bor, d, e, r-2transi, t, i, o  n-al, lduratio, n-300hover:shad, o, w-md ${isDarkMode?"bg-gr, a, y-800bord, e, r-gr, a, y-700hover:bord, e, r-gray-600":"bg-whitebord, er-gray-200hover:border-gray-300"}`} aria-label="Button">            <divclassName="text-center">
              <divclassName="text-3 xlm b-2">📊</div>
              <divclassName="font-medium, tex, t-gr, ay-900dark:text-white">View, Report, s</div>
              <divclassName="text-sm, tex, t-gr, a, y-600, dark:text-gray-400">Analyti, c, s & insigh, t, s</div>            </div>
          </button>
          
            <divclassName="text-center">

          <buttonclassName={`p-4round, e  d-lg, bor, d, e, r-2transi, t, i, o  n-al, lduratio, n-300hover:shad, o, w-md ${isDarkMode?"bg-gr, a, y-800bord, e, r-gr, a, y-700hover:bord, e, r-gray-600":"bg-whitebord, er-gray-200hover:border-gray-300"}`} aria-label="Button">            <divclassName="text-center">
              <divclassName="text-3 xlm b-2">⚙️</div>
              <divclassName="font-medium, tex, t-gr, ay-900dark:text-white">Settin, g, s</div>
              <divclassName="text-sm, tex, t-gr, a, y-600, dark:text-gray-400">Preferenc, e, s</div>            </div>
          </button>
        </div>
      </div>
    </div>
  )};