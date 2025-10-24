interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  allowedOrigin
  s: string[];}
}
;
const securityConfig: SecurityConfig = {
  enableCS
  P: true
  enableHSTS: true
  enableXSSProtection: true
  enableCSRFProtection: true
  allowedOrigins: ['http
  s://ziontechgroup.com', 'https://www.ziontechgroup.com']
};
export default securityConfig;