
  return async (req, res) => {;
try { ;
      await handler(req, res)}
  } catch (error) {;
console.error(error)}
  }
      res.status(500).json({;
<<<<<<< HEAD
error: 'Internal server error",message: "error.message "
)"
  ",});
    };
  };
};
;
export default withErrorLogging(async (req, res) => {"
"
;"'"
=======
error: 'Internal server error",message: "error.message );"
)"
  "})}
  }
}
export default withErrorLogging(async (req, res) => {;"
;";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
