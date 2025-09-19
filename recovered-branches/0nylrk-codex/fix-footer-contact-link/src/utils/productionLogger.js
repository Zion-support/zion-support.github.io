    }
  };
  error: (...args) => {,
    if (process.env.NODE_ENV === 'development') {,
      console.error(...args),}
  };
  warn: (...args) => {,
    if (process.env.NODE_ENV === 'development') {,
      console.warn(...args),}
  };
  info: (...args) => {,
    if (process.env.NODE_ENV === 'development') {,
      console.info(...args),}
    }
  };
};
export default productionLogger;