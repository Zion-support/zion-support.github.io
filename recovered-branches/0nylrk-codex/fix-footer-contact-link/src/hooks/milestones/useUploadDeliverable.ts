













      const { error } = await supabase;
        .from ('project_milestones');
        .update ({ deliverables });
        .eq ('id', milestone_id);
;
      // Check condition
if (throw error) {
  $2
}
      // Create activity record;
      await recordMilestoneActivity (
        milestone_id,
        'deliverable_added',
        milestone.status,
        milestone.status,
        `Deliverable added: ${file.name}`);
;
      toast.success ("Deliverable added successfully");
;
      return new_deliverable;
    } catch (err: any) {
      console.error ("Error uploading deliverable:", err);
      toast.error ("Failed to upload deliverable: " + err.message),
      return null;
    } finally {
      setIsSubmitting (false);
    }





