
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";


import React, { useState } from "react",

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",


}

type ChangelogEntry = {;

import React, { useState } from './react';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Plus, Trash2  } from './lucide-react';
import { AppPlatform  } from './MetadataManager';
interface ChangelogManagerProps {
  platform: AppPlatform;
}


    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="space-y-4">;"
          <div className="flex flex-col md:flex-row gap-3">;"
            <div className="flex-1 grid grid-cols-2 gap-3">;


                onChange={handleInputChange}

              />
            </div>
            <Button;
onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
              onClick={handleAddEntry}

              onClick={handleAddEntry}

            <Button;
              onClick={handleAddEntry}
              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
              <Input;"
                placeholder="Version (e.g. 1.0.1)";"

                name="version";
                value={newEntry.version}
                onChange={handleInputChange}
              />;

              <Input;"
                type="date";"
                name="date";
                value={newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;

              <div
                key={entry && entry.id}
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark">;
                <div className="flex justify-between mb-2">;
                  <div className="flex items-center gap-3">;

                    <span className="text-zion-cyan font-semibold">;
                      v{entry && entry.version}
                    </span>;"
                    <span className="text-sm text-gray-400">{entry && entry.date}</span>;
                  </div>;
                  <Button"
                    variant="ghost""
                    size="sm"
                    onClick={() => handleRemoveEntry(entry && entry.id)}


"
                    className="text-gray-400 hover:text-red-400 p-1 h-auto";
                  >;"
                    <Trash2 className="h-4 w-4" />;
                  </Button>;
                </div>;


            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">;
                No changelog entries yet;
              </p>;

            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;


};
  handleAddEntry;
}disabled= {}
  !newEntry.version || !newEntry.changes "
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {}
  entry.id "

}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>) 
}</div> </div> </CardContent> </Card>) 
};
  );

};


};
