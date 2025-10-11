    statusCode: appError.statusCode || 500,
    statusCode: appError.statusCode || 500,
  };
};
export const asyncHandler = (fn: (req: unknown, res: unknown, next: unknown) => unknown) => (req: unknown, res: unknown, next: unknown) => {,
    ,
  Promise.resolve(fn(req, res, next)).catch((error: unknown) => {,
};
export const errorHandler = ()
  const appError = error instanceof AppError ? error : new AppError(error.message)
message: appError.message,
    stack: appError.stack,
  })
  return {/* TODO: Fix JSX expression */,}}};
};
};
;