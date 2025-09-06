
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle className="text-lg">App Screenshots</CardTitle>;
      </CardHeader>;
      <CardContent>;

            ref={fileInputRef}
            type="file";
            multiple;
            accept="image/*";
            onChange={handleFileSelect}

            className="mt-2";
          >;
            <Plus className="mr-2 h-4 w-4" />;
            Select Files;
          </Button>;
        </div>;

                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity";
              >;
                <Trash2 className="h-3 w-3" />;
              </button>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;

