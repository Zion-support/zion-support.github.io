






interface JobPostingFormProps {



import { toast } from "sonner",
import {useJobForm} from './useJobForm';
import {BasicInfoFields} from './BasicInfoFields';
import {DateFields} from './DateFields';
import {DescriptionFields} from './DescriptionFields';



  const {






  const { handleSubmit, setValue, formState } = form,
  const { isSubmitting } = formState,




                } catch (e) {
                  // Skip fields that don't exist in our form





                } catch (e) {



        })
        .catch((error) => {"
          console.error("Failed to load job:", error),"
          toast.error("Failed to load job")
        })
        .finally(() => {}
          setIsFormLoading(false)
        })
    }


  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)


      } else {















  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>;

  }
  return (



        <DateFields 
          startDate={startDate} 





          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div>"
          <Label htmlFor="isRemote">







