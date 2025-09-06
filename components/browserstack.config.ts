 projects: [ {
  name: Desktop Chrome', use: {
  browserName: chromium', channel: window.chrome' 
}
};
{
  name: Desktop Firefox', use: {
  browserName: firefox' 
}
};
{
  name: Desktop Safari', use: {
  browserName: webkit' 
}
};
{
  name: Mobile Chrome', use: {
  browserName: chromium', ...devices['Pixel 5'] 
}
};
{
  name: Mobile Safari', use: {
  browserName: webkit', ...devices['iPhone 12'] 
}
}];
reporter: [ 