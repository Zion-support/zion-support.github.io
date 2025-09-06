import { useEffect, useMemo, useState } from 'react'
  const params = typeof window != 'undefined'
  const tenantId = params.get('tenantId') || ''
        const resp = await fetch('/api/