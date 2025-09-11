
return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle className="text-lg">App Screenshots</CardTitle>
      </CardHeader>
      <CardContent>

        <div
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
            isDragging
              ? "border-zion-cyan bg-zion-cyan/10"
              : "border-zion-purple/30"
          }`}
          onDragOver = {handleDragOver,}
          onDragLeave = {handleDragLeave,}
          onDrop = {handleDrop,}
        <div 
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
            isDragging 
              ? "border-zion-cyan bg-zion-cyan/10" 
              : "border-zion-purple/30"
          }`}
        >
          <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />
          <p className="text-sm mb-2">Drag & drop screenshots here</p>
          <input

            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <Button 
            variant="outline" 
            <Plus className="mr-2 h-4 w-4" />
            Select Files
          </Button>
        </div>
          {platform === "ios" 
            ? "Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots."
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type."
          }
        </div>

          />;
          <Button
            variant="outline" 
            onClick = {(,) => fileInputRef && fileInputRef.current?.click(),}
            className="mt-2";
          >;
            <Plus className="mr-2 h-4 w-4" />;
            Select Files;
          </Button>;
        </div>;

        <div className="text-xs text-gray-300 mb-4">;
          {platform === "ios" ;
            ? "Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots.";
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type.";
          }
        </div>;

        <div className="grid grid-cols-2 gap-3">;
          {screenshots && screenshots.map((screenshot,) => (;
            <div key={screenshot && screenshot.id} className="relative group">;

              <img
                src = {screenshot && screenshot.url,}

        <div className="grid grid-cols-2 gap-3">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="relative group">
              <img
                src={screenshot.url}
                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Remove screenshot"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}

};

        </div>;
      </CardContent>;
    </Card>;
  );

  const add_screenshots = (files: File[], ) =>: any {
    // Filter for image files only;
    const image_files = files.filter (file => file.type.starts_with ('image/'));
    const max_screenshots = platform === "ios" ? 10 : 8;
    const available_slots = max_screenshots - screenshots.length;
}    // Limit the number of screenshots;
    const max_screenshots = platform === "ios" ? 10 : 8,
    const available_slots = max_screenshots - screenshots.length,
    // Check condition
if ( {) {
  $2
}
      toast.error (`Maximum ${max_screenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`),
      return;
    }
    const filesToAdd = image_files.slice (0, available_slots),
    const new_screenshots = filesToAdd.map (file => ({
      id: Math.random ().to_string (36).substring (2, 9),
      url: URL.createObjectURL (file),
      file;
    })),
    set_screenshots (prev => [...prev, ...new_screenshots]),
    // Check condition
if ( {) {
  $2
}
      toast.warning (`Only added ${filesToAdd.length} screenshots. Maximum is ${max_screenshots}.`);
    }
  },
  const remove_screenshot = (id: string, ) =>: any {
    set_screenshots (prev => {
      const filtered = prev.filter (screenshot => screenshot.id !== id),
      // Revoke object URL to avoid memory leaks;
      const removed = prev.find (screenshot => screenshot.id === id),
      // Check condition
if ( {) {
  $2
}
        URL.revokeObjectURL (removed.url);
      }
      return filtered;
    });
  },
  const handleDragOver = (e: React.DragEvent, ) =>: any {
    e.prevent_default (),
    setIsDragging (true);
  },
  const handleDragLeave = () =>: any {
    setIsDragging (false);
  },
  const handle_drop = (e: React.DragEvent, ) =>: any {
    e.prevent_default (),
    setIsDragging (false),
    // Check condition
if ( {) {
  $2
}
      add_screenshots (Array.from (e.data_transfer.files));
    }
  },
  return (
    <Card className="bg - zion - blue border - zion - purple / 30">;
      <CardHeader>;
        <CardTitle className="text - lg">App Screenshots</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div;
          className={`border - 2 border - dashed rounded - lg p - 4 mb - 4 text - center transition - colors ${
            is_dragging;
              ? "border - zion - cyan bg - zion - cyan / 10";
              : "border - zion - purple / 30";
          }`}
          onDragOver = {handleDragOver, }
          onDragLeave = {handleDragLeave, }
          on_drop = {handle_drop, }
        >;
          <Upload className="mx - auto h - 8 w - 8 text - gray - 300 mb - 2" />;
          <p className="text - sm mb - 2">Drag & drop screenshots here</p>;
          <input;
            ref = {fileInputRef, }
            type="file";
            multiple;
            accept="image/*";
            on_change = {handleFileSelect, }
            className="hidden";
          />;
          <Button;
            variant="outline";
            on_click = {(, ) => fileInputRef.current?.click (), }
            className="mt - 2";
          >;
            <Plus className="mr - 2 h - 4 w - 4" />;
            Select Files;
          </Button>;
        </div>;
        <div className="text - xs text - gray - 300 mb - 4">;
          {platform === "ios";
            ? "Recommended size: 1290x2796 pixels for i_phone. Max 10 screenshots.";
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type.";
          }
        </div>;
        <div className="grid grid - cols - 2 gap - 3">;
          {screenshots.map ((screenshot, ) => (
            <div key={screenshot.id} className="relative group">;
              <img;
                src = {screenshot.url, }
                alt="App screenshot";
                className="w - full h - auto rounded border border - zion - purple / 20";
                loading="lazy";
              />;
              <button;
                on_click = {(, ) => remove_screenshot (screenshot.id), }
                className="absolute top - 1 right - 1 bg - red - 500 / 80 text - white p - 1 rounded - full opacity - 0 group - hover:opacity - 100 transition - opacity focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2";
                aria - label="Remove screenshot";
              >;
                <Trash2 className="h - 3 w - 3" />;
              </button>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
},
;
};

