import React from 'react';
import { useRouter } from 'next/router';

interface CourseDetailProps {
  className?: string;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ className }) => {
  const router = useRouter();
  const { courseId } = router.query;

  return (
    <div className={className || ''}>
      <h1>Course: {courseId}</h1>
      <p>This is a course detail page with ID: {courseId}</p>
    </div>
  );
};

export default CourseDetail;