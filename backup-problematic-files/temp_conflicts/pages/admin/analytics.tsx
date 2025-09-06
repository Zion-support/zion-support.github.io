import React, { useEffect, useMemo, useState } from 'react'
import SimpleLineChart from '../../components/charts/
import SimpleBarChart from '../../components/charts/
import SimpleDoughnutChart from '../../components/charts/
import { KpiBadge } from '../../components/ui/
import { exportCsv, exportSvgAsPng } from '../../utils/
import useRole from '../../hooks/
    fetch('/api/analytics/