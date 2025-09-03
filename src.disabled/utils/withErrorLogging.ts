<<<<<<< HEAD
export type ApiHandler = (req: any, res: any) => any; export function withErrorLogging(handler: ApiHandler): ApiHandler { return async(req, res) => { try { return await handler(req, res); } catch(err: any) { captureException(err?.stack ? err.stack : err); if(res && !res.headersSent) { res.statusCode = 500; if(typeof res.json === "function") { res.json({ error: "Internal server error"  }); } else if(typeof res.end === "function") { res.end("Internal server error"); } } } }; } ";
=======
<<<<<<< HEAD

export type ApiHandler = (req: any, res: any) => any; export function withErrorLogging (handler: ApiHandler) : ApiHandler { return async (req, res) => { try { return await handler (req, res) ; } catch (err: any) { captureException (err?.stack ? err.stack : err) ; if (res && !res.headersSent) { res.statusCode = 500; if (typeof res.json === "function") { res.json ({ error: "Internal server error" }) ; } else if (typeof res.end === "function") { res.end ("Internal server error") ; } } } }; } ";"""";

export type ApiHandler = (req: any, res: any) => any; export function withErrorLogging(handler: ApiHandler): ApiHandler { return async(req, res) => { try { return await handler(req, res); } catch(err: any) { captureException(err?.stack ? err.stack : err); if(res && !res.headersSent) { res.statusCode = 500; if(typeof res.json === "function") { res.json({ error: "Internal server error"  }); } else if(typeof res.end === "function") { res.end("Internal server error"); } } } }; } ";
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======
<<<<<<< HEAD
export: type ApiHandler = (req: an,y, res: any) => any: export function withErrorLogging (handler: ApiHandler) : ApiHandler: { return async (re,q, res) => { try { return await handler (req, res)  } catch (err: any) { captureException: (err?.stack ? err.stack : err)  if: (res && !res.headersSent) { res.statusCode = 500 if (typeof res.json === 'function') { res.json ({ error: 'Internal: server error', })} else if (typeof res.end === 'function') { res.end ('Internal server error')  } } } } } '';'";";
=======
<<<<<<< HEAD
export type ApiHandler = (req: any, res: any) => any export function withErrorLogging (handle,
    r: ApiHandler) : ApiHandler { return async (req, res) => { try { return await handler (req, res)  } catch (err: any) { captureException (err?.stack ? err.stack : err)  if (res && !res.headersSent) { res.statusCode = 500 if (typeof res.json === 'function') { res.json ({ erro,
    r: 'Internal server error' })} else if (typeof res.end === 'function') { res.end ('Internal server error')  } } } } } '';";"
=======
export type ApiHandler = (req: any, res: any) => any export function withErrorLogging (handler: ApiHandler) : ApiHandler { return async (req, res) => { try { return await handler (req, res)  } catch (err: any) { captureException (err?.stack ? err.stack : err)  if (res && !res.headersSent) { res.statusCode = 500 if (typeof res.json === 'function') { res.json ({ error: 'Internal server error' })} else if (typeof res.end === 'function') { res.end ('Internal server error')  } } } } } '";
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
