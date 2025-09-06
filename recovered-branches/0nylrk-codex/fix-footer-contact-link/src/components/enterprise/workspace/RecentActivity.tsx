      case "job": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>;
      case "candidate":;
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;
      case "interview":;
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;
    }
  }

  return (
    <Card>;
      <CardHeader>;
        <CardTitle>Recent Activity</CardTitle>;
        <CardDescription>Latest actions from your team</CardDescription>;
      </CardHeader>;
      <CardContent className="p-0">;
        <div className="divide-y divide-border">;
          {activities && activities.map((activity) => (;
            <div key={activity && activity.id} className="p-4 flex items-start gap-3">;
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">;
                {activity && activity.user.charAt(0)}
              </div>;
              <div className="flex-1">;
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">;
                  <p className="text-sm">;
                    <span className="font-medium">{activity && activity.user}</span>{" "}
                    {activity && activity.action}{" "}
                    <span className="font-medium">{activity && activity.target}</span>;
                  </p>;
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">;
                    {getBadgeForType(activity && activity.type)}
                    <span className="text-xs text-muted-foreground">{activity && activity.timestamp}</span>;
                  </div>;
                </div>;
              </div>;
            </div>;
          ))}
            View All Activity;
          </button>;
        </div>;
      </CardContent>;
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
