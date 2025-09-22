export const productionLogger = {;
  log: (...args: any[]) => {;
    if (process.env.NODE_ENV !== 'production') {;
      console.log(...args);
    }
<
    if (process.env.NODE_ENV !== 'production') {;
      console.warn(...args);
    }
  }
};''