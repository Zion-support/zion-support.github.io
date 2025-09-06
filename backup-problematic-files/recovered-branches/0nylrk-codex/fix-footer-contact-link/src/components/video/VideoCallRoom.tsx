
    <Card className={`w-full ${className || 'max-w-5xl mx-auto'}`}>;
      <CardHeader className="flex flex-row items-center justify-between bg-zion-blue-dark rounded-t-lg p-4">;
        <div className="flex items-center space-x-2">;
          <CardTitle className="text-white">Video Call</CardTitle>;
          <Badge variant="outline" className="text-white border-zion-purple bg-zion-blue-light">;

          </Badge>;
        </div>;
        <div className="flex items-center space-x-2">;
          <Badge variant="secondary" className="bg-zion-blue-light text-white">;
            {formatDuration(callDuration)}

                  <div className="bg-zion-blue-light h-full w-full flex items-center justify-center text-white">;
                    {/* Placeholder for actual video stream */}
                    <Video className="h-12 w-12 opacity-50" />;
                  </div>;

                  <div className="bg-zion-blue h-full w-full flex items-center justify-center text-white">;
                    {/* Placeholder for screen share */}
                    <ScreenShare className="h-12 w-12 opacity-50" />;
                  </div>;

                      </AvatarFallback>;
                    </Avatar>;
                  </div>;
                )}

            <div className="col-span-full flex flex-col items-center justify-center py-12 text-white">;
              <Video className="h-16 w-16 mb-4 opacity-30" />;
              <p className="text-center text-lg mb-2">No participants yet</p>;
              <p className="text-center text-sm text-gray-300">;
                Share the meeting link to invite others;
              </p>;
            </div>;
          )}
        </div>;

            <Phone className="rotate-135" />;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;

