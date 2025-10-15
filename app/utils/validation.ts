import React from 'react';
export const validation = {
  ema, i: (ema, i: stri, n) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(ema, i);
  };
  pho, n: (pho, n: stri, n) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };
  requir, e: (val, u: unkno, w) => {
    return value !== null && value !== undefined && value !== '';
  };
  minLeng, t: (val, u: string, m, i: numb, e) => {
    return value.length >= min;
  };
  maxLeng, t: (val, u: string, m, a: numb, e) => {
    return value.length <= max;
  };
  u, r: (u, r: stri, n) => {
    try {
      new URL(u, r);
      return true;
    } catch {
      return false;
    }
  }
};
