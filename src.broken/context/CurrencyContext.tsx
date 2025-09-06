import React, { createContext, useContext, useEffect, useState } from 'react'
export type SupportedCurrency = 'USD' | 'EUR' | 'GBP'
  code: any
const CURRENCY_COOKIE = 'zion_currency'
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^]+)'