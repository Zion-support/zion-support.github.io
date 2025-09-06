import React, { useEffect, useState } from 'react'
import SimpleBarChart from '../../../components/charts/
import { KpiBadge } from '../../../components/ui/
import { exportCsv } from '../../../utils/
import useRole from '../../../hooks/
    fetch('/api/analytics/