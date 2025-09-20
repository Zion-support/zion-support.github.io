import { Loader2; Edit, Trash2 } from "lucide-react";
import { useResume } from "@/hooks/useResume";
import { Alert; AlertDescription } from "@/components/ui/alert";
import { Card; CardContent } from "@/components/ui/card";
import { AIEnhancementButton } from "@/components/resume-builder/forms/AIEnhancementButton";
// Define schema for form validation} else {
import { Loader2, EditTrash2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
// Define schema for form validation} else {
                    onBack()
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
              </Button>
              <div className='flex gap-2'>
                <Button type='submit' disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  {editingId ? 'Update' : 'Add'} Experience
                </Button>
                {!editingId && workExperiences.length > 0 && (
                  <Button type='button' onClick={onComplete}>
                    Next
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}> {'
  editingId ? 'Cancel': 'Back'
onBack()
}
}}
>;
{editingId ? "Cancel" : "Back"}
</Button>;
<div className="flex gap-2">;
<Button type="submit" disabled={isLoading}>;
{isLoading && (
<Loader2 className="mr-2 h-4 w-4 animate-spin" />;
)}
{editingId ? "Update" : "Add"} Experience;
</Button>;
{!editingId && workExperiences.length > 0 && (
<Button type="button" onClick={onComplete}>;
Next;
</Button>;
)}
</div>;
</div>;
</form>;
</Form>;
</div>;
</div>;
)
}> {";
editingId ? "Cancel": "Back";
}</Button> Next </Button>)
}</div> </div> </form> </Form> </div> </div>)
}""  )
}