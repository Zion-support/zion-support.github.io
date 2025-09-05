 if (userRole === 'talent') {
  switch (missingMilestone) {
  case 'profile completed': title = 'Complete your profile';
message = 'Complete your profile to get discovered by clients';
actionUrl = '/profile';
actionText = 'Complete Profile';
break;
case 'skills added': title = 'Add your skills';
message = 'Add your skills to get better job matches';
actionUrl = '/profile/skills';
actionText = 'Add Skills';
break;
case 'availability set': case 'job posted': title = 'Post your first job';
message = 'Post your first job to start finding talent';
actionUrl = '/post-job';
actionText = 'Post Job';
break;
case 'match viewed': title = 'View your AI matches';
message = 'Check out your AI-matched talent suggestions';
actionUrl = '/client-dashboard';
actionText = 'View Matches';
break;
case 'talent invited': 
}