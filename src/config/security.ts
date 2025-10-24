interface SecurityConfig {


  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  allowedOrigins: string[];,
,

}
const securityConfig: SecurityConfig = {,
  enableCSP: true,
  enableHSTS: true,
  enableXSSProtection: true,
  enableCSRFProtection: true,
  allowedOrigins: ['https://ziontechgroup.com', 'https://www.ziontechgroup.com'],
};

export default securityConfig;