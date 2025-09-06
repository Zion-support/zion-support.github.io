 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //This component handles deep linking to the mobile app //Try to open the app if (isAndroid || isiOS) {
  //Set a timeout to redirect to app store if the app doesn't open attemptAppOpen () 
}, [navigate]);
return (<div className="min-h-screen flex items-center justify-center bg-zion-blue" > <SEO /> <div className="text-center p-8" > <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6" ></div> {
  status === 'redirecting'&& (<> </p> </>) 
}{
  status === 'timeout'&& (<> <h1 className="text-2xl font-bold mb-2" >App Not Installed</h1> <p className="text-gray-300 mb-6" > We're redirecting you to download the Zion app. </p> </>) 
}{
  status === 'failed' && (<> <h1 className="text-2xl font-bold mb-2" >Opening App Failed</h1> <p className="text-gray-300 mb-6" > We're taking you to our mobile app page where you can download the app. </p> <Link to="/mobile-launch" > <Button className="bg-zion-cyan hover:bg-zion-cyan/80" > Go to Mobile App Page </Button> </Link> </>) 
}</div> </div>) 
};
export default OpenAppRedirect;
